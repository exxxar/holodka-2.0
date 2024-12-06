<?php

namespace App\Jobs;

use App\Classes\VKBusinessLogic;
use App\Events\MyEvent;
use App\Models\UserJob;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ParseVKJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $group;
    public $max;
    public $jobId;
    public $userId;
    public $token;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($group,$max,$jobId, $userId, $token)
    {
        $this->group = $group;
        $this->max = $max;
        $this->jobId = $jobId;
        $this->userId = $userId;
        $this->token = $token;

        Log::info("start job");
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {


        Log::info("step 0" );
        ini_set('max_execution_time', '30000');
        $vk = new VKBusinessLogic();
        $vk->setAccessToken($this->token);
        $vk->setOwner($this->userId);
        $count = $vk->handler($this->group, $this->max);

        $jobId = $this->jobId;

        $job = UserJob::query()->find($jobId);
        $job->result_count = $count ?? 0;
        $job->completed_at = Carbon::now();
        $job->save();

        event(new MyEvent('hello world', $this->userId, $this->group, $jobId));
        Log::info("end job");
    }
}
