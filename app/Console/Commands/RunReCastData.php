<?php

namespace App\Console\Commands;

use App\Classes\VKBusinessLogic;
use App\Enums\UserJobStatusEnum;
use App\Events\MyEvent;
use App\Jobs\ParseVKJob;
use App\Models\UserJob;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class RunReCastData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:run-recast-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        ini_set('max_execution_time', '100');

        $jobs = UserJob::query()
            ->where(function ($q) {
                $q->whereNull("completed_at")
                    ->where("status", 1);
            })
            ->orWhereNull("token")
            ->get();

        foreach ($jobs as $job) {
            $job->status = UserJobStatusEnum::Error->value;
            $job->completed_at = Carbon::now("+3");
            $job->save();
        }

        ParseVKJob::dispatch();


    }
}
