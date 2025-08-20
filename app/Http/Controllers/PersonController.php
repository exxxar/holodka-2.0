<?php

namespace App\Http\Controllers;

use App\Http\Resources\PersonCollection;
use App\Http\Resources\PersonResource;
use App\Models\Person;
use App\Models\User;
use App\Models\UserJob;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;


class PersonController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        return Inertia::render('Persons');
    }

    public function getStatistic(Request $request)
    {

        $users = User::query()
            ->withCount([
                // Persons
                'persons as persons_checked' => fn($q) => $q->whereNotNull('checked_at'),
                'persons as persons_new' => fn($q) => $q->where('status', 0),
                'persons as persons_in_process' => fn($q) => $q->where('status', 1),
                'persons as persons_not_ready' => fn($q) => $q->where('status', 3),
                'persons as persons_decline' => fn($q) => $q->where('status', 2),
                'persons as persons_success' => fn($q) => $q->where('status', 4),
                'persons as persons_summary',

                // Jobs
                'jobs as jobs_new' => fn($q) => $q->where('status', 0),
                'jobs as jobs_in_process' => fn($q) => $q->where('status', 1),
                'jobs as jobs_completed' => fn($q) => $q->where('status', 2),
                'jobs as jobs_error' => fn($q) => $q->where('status', 3),
            ])
            ->get();

        $persons = [];
        $jobs = [];

        foreach ($users as $user) {
            $persons[] = (object)[
                "name"       => $user->name,
                "checked"    => $user->persons_checked,
                "new"        => $user->persons_new,
                "in_process" => $user->persons_in_process,
                "not_ready"  => $user->persons_not_ready,
                "decline"    => $user->persons_decline,
                "success"    => $user->persons_success,
            ];

            $jobs[] = (object)[
                "name"            => $user->name,
                "job_new"         => $user->jobs_new,
                "job_in_process"  => $user->jobs_in_process,
                "job_completed"   => $user->jobs_completed,
                "job_error"       => $user->jobs_error,
                "summary_persons" => $user->persons_summary,
            ];
        }

        return response()->json([
            "persons" => $persons,
            "jobs"    => $jobs,
        ]);
    }

    public function excelDownload(Request $request)
    {
        return $this->personsFilter($request->all(), true);
    }

    public function cities(Request $request)
    {
        $user = User::query()->find(Auth::user()->id);

        $cities = Person::query()
            ->where("owner_id", Auth::user()->id)
            ->where("from", env("PRODUCT_KEY"))
            ->whereNotNull("city")
            ->distinct()
            ->pluck("city");

        return response()
            ->json([
                "cities" => $cities
            ]);
    }

    public function groups(Request $request)
    {
        $user = User::query()->find(Auth::user()->id);

        $groups = Person::query()
            ->where("owner_id", Auth::user()->id)
            ->where("from", env("PRODUCT_KEY"))
            ->whereNotNull("vk_group_link")
            ->distinct()
            ->pluck("vk_group_link");

        return response()
            ->json([
                "groups" => $groups
            ]);
    }

    /**
     * @throws \HttpException
     */
    public function changeStatusPerson(Request $request)
    {
        $request->validate([
            "person_id" => "required|integer",
            "status" => "required|integer"
        ]);

        $person = Person::query()
            ->where("id", $request->person_id)
            ->first();

        if (is_null($person))
            throw new \HttpException("Пользователь не найден");

        $person->status = $request->status ?? 0;
        $person->save();

        return response()->noContent();
    }

    /**
     * @throws \HttpException
     */
    public function checkPerson(Request $request)
    {
        $request->validate([
            "person_id" => "required|integer"
        ]);

        $person = Person::query()
            ->where("id", $request->person_id)
            ->first();

        if (is_null($person))
            throw new \HttpException("Пользователь не найден");

        $person->checked_at = Carbon::now();
        $person->save();

        return response()->noContent();
    }

    protected function personsFilter(array $data, bool $isDownload = false)
    {

        $search = $data["search"] ?? null;
        $order = $data["order"] ?? "id";
        $direction = $data["direction"] ?? "asc";
        $filters = $data["filters"] ?? null;
        $fields = $data["fields"] ?? null;
        $size = $data["size"] ?? config('app.results_per_page');

        $user = User::query()->find(Auth::user()->id);

        $persons = Person::query()
            ->where("owner_id", $user->id)
            ->where("from", env("PRODUCT_KEY"));

        if (!is_null($search)) {
            $persons = $persons
                ->where(function ($query) use ($search) {
                    $query->where("name", 'like', "%$search%")
                        ->orWhere("city", 'like', "%$search%");
                });
        }

        if (!is_null($filters)) {
            $isMessageClosed = $filters["is_messages_closed"] ?? null;
            $needEmptyCity = in_array("Без города", $filters["cities"] ?? []);
            $needEmptyGroup = in_array("Не указана", $filters["groups"] ?? []);

            if (!empty($filters["groups"])) {
                $persons = $persons->whereIn("vk_group_link", $filters["groups"]);
                if ($needEmptyGroup) {
                    $persons = $persons->orWhereNull("vk_group_link");
                }
            }

            if (!is_null($isMessageClosed)) {
                $persons = $persons->where("is_messages_closed", $isMessageClosed);
            }

            if (!empty($filters["cities"])) {
                $persons = $persons->whereIn("city", $filters["cities"]);
                if ($needEmptyCity) {
                    $persons = $persons->orWhereNull("city");
                }
            }

            if (!empty($filters["statuses"])) {
                $persons = $persons->whereIn("status", $filters["statuses"]);
            }

            if (!empty($filters["age"])) {
                $start = $filters["age"]["from"] ?? null;
                $end = $filters["age"]["to"] ?? null;

                if (!is_null($start) && !is_null($end)) {
                    $persons = $persons->whereBetween("age", [$start, $end]);
                } elseif (!is_null($start)) {
                    $persons = $persons->where("age", ">=", $start);
                } elseif (!is_null($end)) {
                    $persons = $persons->where("age", "<=", $end);
                }
            }
        }

        $persons = $persons->orderBy($order, $direction);

        if (!is_null($fields)) {
            $fields = array_values(
                Collection::make($fields)->where("active", true)->pluck("key")->toArray()
            );

            if (count($fields) > 0) {
                $persons = $persons->select($fields);
            }
        }

        if ($isDownload) {
            $persons = $persons->get();
            return Excel::download(new \App\Exports\UsersExport($fields, $persons->toArray()), 'result-file.xlsx');
        }

        return new PersonCollection($persons->paginate($size));
    }

    public function getSelfClientList(Request $request)
    {
        return $this->personsFilter($request->all());
    }


    public function destroy(Request $request, $id): \Illuminate\Http\Response
    {
        $client = Person::query()->find($id);

        if (is_null($client))
            return response()->noContent(404);

        $client->delete();

        return response()->noContent(200);
    }
}
