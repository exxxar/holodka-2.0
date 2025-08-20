<?php

namespace App\Console\Commands;

use App\Classes\VKBusinessLogic;
use App\Enums\UserJobStatusEnum;
use App\Events\MyEvent;
use App\Models\UserJob;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class RunGatherData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:run-gather-data';

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
        ini_set('max_execution_time', '3000');

        $jobs = UserJob::query()
            ->whereNull("completed_at")
            ->where("status", 1)
            ->get();

        foreach ($jobs as $job)
        {
            $job->status = UserJobStatusEnum::Error->value;
            $job->completed_at = Carbon::now("+3");
            $job->save();
        }

        $jobs = UserJob::query()
            ->whereNull("completed_at")
            ->where("status", 0)
            ->get();

       // Log::info("TEST".print_r($jobs->toArray(), true));

        foreach ($jobs as $job) {
            $count = 0;
            try {
                $vk = new VKBusinessLogic();

                if (is_null($job->token) || is_null($job->group))
                    continue;

                $vk->setAccessToken($job->token);
                $vk->setOwner($job->user_id);

                $job->status = UserJobStatusEnum::InProgress->value;
                $job->save();

                if ($job->is_only_active)
                    $count = $vk->handler($job->group, $job->max_post_count);
                else
                    $count = $vk->handlerFull($job->group, $job->id);

                $job->result_count = $count ?? 0;
                $job->status = UserJobStatusEnum::Completed->value;
                $job->completed_at = Carbon::now("+3");
                $job->save();

                event(new MyEvent('hello world', $job->user_id, $job->group, $job->id));
            }catch (\Exception $exception){
                $job->result_count = $count ?? 0;
                $job->completed_at = Carbon::now("+3");
                $job->status = UserJobStatusEnum::Error->value;
                $job->save();

                Log::info($exception);
            }

        }


    }
}
