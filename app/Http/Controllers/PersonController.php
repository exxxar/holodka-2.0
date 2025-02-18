<?php

namespace App\Http\Controllers;

use App\Http\Resources\PersonCollection;
use App\Http\Resources\PersonResource;
use App\Models\Person;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
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

        $currentUser = User::query()->find(Auth::user()->id);

        $users = User::query()
            ->where("company", env("PRODUCT_KEY") ?? null)
            ->get();

        $tmp = [];
        foreach ($users as $user) {

            $persons = Person::query()
                ->where("owner_id", $user->id)
                ->get();

            $tmp[] = (object)[
                "name" => $user->name,
                "checked" => Collection::make($persons)->whereNotNull("checked_at")->count(),
                "new" => Collection::make($persons)->where("status", 0)->count(),
                "in_process" => Collection::make($persons)->where("status", 1)->count(),
                "not_ready" => Collection::make($persons)->where("status", 3)->count(),
                "decline" => Collection::make($persons)->where("status", 2)->count(),
                "success" => Collection::make($persons)->where("status", 4)->count(),
            ];

        }

        return response()->json($tmp);
    }

    public function excelDownload(Request $request)
    {

        $search = $request->search ?? null;
        $order = $request->order ?? "id";
        $direction = $request->direction ?? "asc";

        $filters = $request->filters ?? null;

        $fields = $request->fields ?? null;


        $persons = Person::query()
            ->where("owner_id", Auth::user()->id);

        if (!is_null($search))
            $persons = $persons
                ->where("name", 'like', "%$search%")
                ->orWhere("city", 'like', "%$search%");

        if (!is_null($filters)) {

            $needEmptyCity = count(array_filter($filters["cities"] ?? [], function ($item) {
                    return $item === "Без города";
                })) > 0;


            if (count($filters["cities"] ?? []) > 0) {
                $persons = $persons
                    ->whereIn("city", $filters["cities"] ?? []);

                if ($needEmptyCity)
                    $persons = $persons
                        ->orWhereNull("city");

            }


            if (count($filters["statuses"] ?? []) > 0)
                $persons = $persons
                    ->whereIn("status", $filters["statuses"] ?? []);


            if (count($filters["age"] ?? []) > 0) {
                $start = $filters["age"]["from"] ?? null;
                $end = $filters["age"]["to"] ?? null;

                if (is_null($start) && !is_null($end))
                    $persons = $persons
                        ->where("age", "<=", $end);

                if (!is_null($start) && is_null($end))
                    $persons = $persons
                        ->where("age", ">=", $start);

                if (!is_null($start) && !is_null($end))
                    $persons = $persons
                        ->whereBetween("age", [$start, $end]);

            }
        }

        $persons = $persons
            ->orderBy($order, $direction);

        if (!is_null($fields)) {

            $fields = array_values(Collection::make($fields)
                ->where("active", true)
                ->pluck("key")->toArray());

            $fields = Collection::make($fields)
                ->except("is_message_closed")
                ->all();

            if (count($fields) > 0)
                $persons = $persons
                    ->select($fields);
        }

        $persons = $persons
            ->get();


        return Excel::download(new \App\Exports\UsersExport($fields, $persons->toArray()), 'result-file.xlsx');
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

    public function getSelfClientList(Request $request): PersonCollection
    {


        $search = $request->search ?? null;
        $order = $request->order ?? "id";
        $direction = $request->direction ?? "asc";


        $filters = $request->filters ?? null;

        $size = $size ?? config('app.results_per_page');

        $user = User::query()->find(Auth::user()->id);


        $persons = Person::query()
            ->where("owner_id", $user->id)
            ->where("from", env("PRODUCT_KEY"));


        if (!is_null($search))
            $persons = $persons
                ->where("name", 'like', "%$search%")
                ->orWhere("city", 'like', "%$search%");

        if (!is_null($filters)) {

            $isMessageClosed = $filters["is_messages_closed"] ?? null;

            $needEmptyCity = count(array_filter($filters["cities"] ?? [], function ($item) {
                    return $item === "Без города";
                })) > 0;

            $needEmptyGroup = count(array_filter($filters["groups"] ?? [], function ($item) {
                    return $item === "Не указана";
                })) > 0;

            if (count($filters["groups"] ?? []) > 0) {
                $persons = $persons
                    ->whereIn("vk_group_link", $filters["groups"] ?? []);

                if ($needEmptyGroup)
                    $persons = $persons
                        ->orWhereNull("vk_group_link");

            }

            if (!is_null($isMessageClosed)) {
                $persons = $persons
                    ->where("is_messages_closed", $isMessageClosed);
            }


            if (count($filters["cities"] ?? []) > 0) {
                $persons = $persons
                    ->whereIn("city", $filters["cities"] ?? []);

                if ($needEmptyCity)
                    $persons = $persons
                        ->orWhereNull("city");

            }


            if (count($filters["statuses"] ?? []) > 0)
                $persons = $persons
                    ->whereIn("status", $filters["statuses"] ?? []);


            if (count($filters["age"] ?? []) > 0) {
                $start = $filters["age"]["from"] ?? null;
                $end = $filters["age"]["to"] ?? null;

                if (is_null($start) && !is_null($end))
                    $persons = $persons
                        ->where("age", "<=", $end);

                if (!is_null($start) && is_null($end))
                    $persons = $persons
                        ->where("age", ">=", $start);

                if (!is_null($start) && !is_null($end))
                    $persons = $persons
                        ->whereBetween("age", [$start, $end]);

            }
        }

        $persons = $persons
            ->orderBy($order, $direction)
            ->paginate($size);

        return new PersonCollection($persons);
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
