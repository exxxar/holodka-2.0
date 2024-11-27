<?php

use App\Classes\VKBusinessLogic;
use App\Http\Controllers\ProfileController;
use App\Jobs\ParseVKJob;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Redis;
use VK\OAuth\VKOAuth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/redis', function () {


    $data = 'Sample data';

    $queueName = 'default';

    ParseVKJob::dispatch($data)->delay(now()->addSeconds(10))
        ->onQueue('vk');


    $tasks = Redis::client()
        ->lrange("laravel_database_queues:default:delayed", 0, -1);


// Выводим задачи
    foreach ($tasks as $task) {
        $decodedTask = json_decode($task, true); // Декодируем JSON
        echo $decodedTask; // Выводим содержимое задачи
    }

    // Установить значение ключа
    //Redis::set('my_key', 'my_value');
// Добавление задания в очередь с задержкой 60 секунд


})->name("test.redis");


Route::get('/vk', function () {
    return Socialite::driver('vkontakte')->redirect();
})->name("vk.login-url");


Route::any('/vk/auth', function (Request $request) {

    try {
        $vkUser = Socialite::driver('vkontakte')->user();

    } catch (Exception $e) {
        return redirect()->route('start');
    }


    $user = \App\Models\User::query()->where("email", $vkUser->getEmail())
        ->first();

    if (is_null($user)) {
        $user = \App\Models\User::query()
            ->create([
                'name' => $vkUser->getName() ?? $vkUser->getNickname(),
                'email' => $vkUser->getEmail() ?? Str::uuid() . "@ya-v-dele.ru",
                'password' => bcrypt($vkUser->getNickname()),
            ]);
    }


    Auth::login($user);

    $request->session()->regenerate();

    return redirect()->route('dashboard');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name("start");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post("/get-vk-link", function (\Illuminate\Http\Request $request) {
        $request->validate([
            "max_post_count" => "required|integer",
            "group" => "required",
        ]);

        $state = base64_encode(json_encode([
            "max_post_count" => $request->max_post_count ?? 10,
            "group" => $request->group ?? '',
        ]));
        $vk = new VKBusinessLogic();
        return $vk->getAuthLink($state);
    });

    Route::delete("/jobs/remove/{id}", function ($id) {
        \App\Models\UserJob::query()
            ->where("id", $id)
            ->delete();
        return response()->noContent();
    });

    Route::post("/jobs", function () {
        $jobs = \App\Models\UserJob::query()
            ->where("user_id", Auth::user()->id)
            ->orderBy("created_at", "desc")
            ->paginate(30);
        return $jobs;
    });

    Route::post("/add-work", function (\Illuminate\Http\Request $request) {
        $request->validate([
            "group" => "required",
            "max_post_count" => "required"
        ]);

        $user = User::query()->find(Auth::user()->id);

        $group = $request->group;
        $max = $request->max_post_count ?? 10;

        $job = \App\Models\UserJob::query()->create([
            "group" => $group,
            "user_id" => $user->id,
            "max_post_count" => $max,
            "result_count" => 0,
            "completed_at" => null,
        ]);

        ParseVKJob::dispatch($group,
            $max,
            $job->id,
            $user->id,
            $user->vk_access_token)
            ->delay(now()->addSeconds(5));
    });

    Route::post("/get-vk-token", function (\Illuminate\Http\Request $request) {
        $vk = new VKBusinessLogic();

        return $vk->getAuthLink();
    });

    Route::post("/fill-vk", function (\Illuminate\Http\Request $request) {
        $vk = new VKBusinessLogic();

        $user = User::query()->find(Auth::user()->id);

        $vk->setAccessToken($user->vk_access_token);
        $res = $vk->post("test");


        return response()->noContent();
    });

    Route::any('/vk/callback', function (\Illuminate\Http\Request $request) {

        $vk = new VKBusinessLogic($request->code);

        return redirect()->route("dashboard");
        // return Excel::download(new \App\Exports\UsersExport("", prepareUsers($users)), 'profcom_dongu.xlsx');
    });
});

Route::get('/persons', function () {
    return Inertia::render('Persons');
})->middleware(['auth', 'verified'])->name('persons');

Route::get('/statistic', function () {
    return Inertia::render('Statistic');
})->middleware(['auth', 'verified'])->name('statistics');


Route::prefix("/statistics")
    ->middleware(['auth', 'verified'])
    ->controller(App\Http\Controllers\PersonController::class)
    ->group(function () {
        Route::post("/", "getStatistic");
    });

Route::prefix("/persons")
    ->middleware(['auth', 'verified'])
    ->controller(App\Http\Controllers\PersonController::class)
    ->group(function () {
        Route::get("/", "index")->name('persons');
        Route::get("/cities", "cities")->name('cities');

        Route::post("/", "getSelfClientList");
        Route::post("/check-person", "checkPerson");
        Route::post("/excel-download", "excelDownload");
        Route::post("/change-person-status", "changeStatusPerson");
        Route::post("/store", "store");
        Route::delete("/{id}", "destroy");
    });

require __DIR__ . '/auth.php';

