<?php

namespace App;

use App\Model\TwoAuthToken;
use App\Notifications\MyResetPasswordNotification;
use App\Notifications\MyVerifyEmailNotification;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','google_id','two_factor_auth','mobile','about','skill','is_supervisor','is_staff'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'skill'=>'array'
    ];

    public function is_supervisor()
    {
        return $this->is_supervisor;
    }
    public function is_staff()
    {
        return $this->is_staff;
    }

    public function hasTwoFactorAuth($key)
    {
        return $this->two_factor_auth == $key;
    }

    public function twoAuthToken()
    {
        return $this->hasMany(TwoAuthToken::class);
    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new MyResetPasswordNotification($token));
    }

    /**
     * Send the email verification notification.
     *
     * @return void
     */
    public function sendEmailVerificationNotification()
    {
        $this->notify(new MyVerifyEmailNotification());
    }

    public function scopeSearch($query,$search,$type)
    {
        $query->where($type,'like','%'.$search.'%')->get();
        return $query;
    }

    public function scopeSort($query,$sort,$type)
    {
        $query->orderBy($type,$sort)->get();
    }

    public function scopeSortAdmin($query)
    {
        $query->where('is_supervisor',1)->orWhere('is_staff',1)->get();
    }

}
