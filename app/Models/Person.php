<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Person extends Model
{
    use HasFactory;

    protected $table = "persons";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'age',
        'birthday',
        'vk_group_link',
        'vk_user_link',
        'city',
        'from',
        'common_count',
        'home_town',
        'last_seen',
        'is_profile_closed',
        'is_messages_closed',
        'deactivated',
        'owner_id',
        'vk_id',
        'checked_at', // дата последнего взаимодействия
        'status', //0 - Только добавлен, 1 - взят в обработку, 2 - отказ, 3 - сомневается, 4 - успех
        'checked_comment', //комментарий по взаимодействию
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'is_profile_closed' => 'boolean',
        'is_messages_closed' => 'boolean',
        'deactivated' => 'boolean',
        'owner_id' => 'integer',
        'last_seen' => 'datetime:Y-m-d H:i:s',

    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
