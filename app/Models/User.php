<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'company',
        'vk_access_token',
        'vk_token_expired_at',

    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = ["is_active_token"];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getIsActiveTokenAttribute(){

        $timeFromVariable = $this->vk_token_expired_at ?? null;

        if (is_null($timeFromVariable))
            return false;

        $currentTime = Carbon::now();

        $variableTime = Carbon::parse($timeFromVariable);

        return $currentTime->lessThan($variableTime);
    }

    public static function getSelf(){
        $user = User::query()->find(Auth::user()->id ?? null);
        return $user;
    }
}
