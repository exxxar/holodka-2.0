<?php

use App\Classes\VKBusinessLogic;
use App\Http\Controllers\ProfileController;
use Carbon\Carbon;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

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






Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post("/persons/get-vk-link", function (\Illuminate\Http\Request $request) {
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

    Route::any('/vk/callback', function (\Illuminate\Http\Request $request) {

        $vk = new VKBusinessLogic($request->code);
        $users = $vk->handler($request->state);

        return Inertia::render('Persons');
        // return Excel::download(new \App\Exports\UsersExport("", prepareUsers($users)), 'profcom_dongu.xlsx');
    });
});

Route::get('/persons', function () {
    return Inertia::render('Persons');
})->middleware(['auth', 'verified'])->name('persons');

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

