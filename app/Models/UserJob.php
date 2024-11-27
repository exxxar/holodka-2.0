<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserJob extends Model
{
    use HasFactory;

    protected $fillable = [
        "group",
        "user_id",
        "max_post_count",
        "result_count",
        "completed_at",
    ];

    protected $casts = [
      "created_at"=>"datetime:Y-m-d H:i:s"
    ];
}
