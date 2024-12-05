<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MyEvent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $userId;
    public $group;
    public $jobId;

    public function __construct($message, $userId, $group, $jobId)
    {
        $this->message = $message;
        $this->userId = $userId;
        $this->group = $group;
        $this->jobId = $jobId;
    }

    public function broadcastOn()
    {
        return new Channel('my-channel');
        //return ['my-channel'];
    }

    public function broadcastAs()
    {
        return 'my-event';
    }
}
