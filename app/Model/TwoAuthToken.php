<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class TwoAuthToken extends Model
{
    protected $fillable = ['user_id', 'token', 'expired_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeCodeGenerator($query, $user)
    {
        if ($activeCode = $this->isActive($user)) {
            return $activeCode = $activeCode->token;
        } else {
            do {
                $code = rand(100000, 999999);
            } while ($this->isUnique($user, $code));

            $user->twoAuthToken()->create([
                'token' => $code,
                'expired_at' => now()->addMinutes(2),
            ]);
        }

        return $code;
    }

    private function isUnique($user, int $code)
    {
        return !!$user->twoAuthToken()->whereToken($code)->first();
    }

    private function isActive($user)
    {
        return $user->twoAuthToken()->where('expired_at', '>', now())->first();
    }

    public function scopeIsValid($query, $code, $user)
    {
        return !!$user->twoAuthToken()->whereToken($code)->where('expired_at', '>', now())->first();
    }
}
