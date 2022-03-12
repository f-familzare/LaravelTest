<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable=['title','user_id','description','status','expire_at'];

    public function user()
    {
        return $this->belongsToMany(User::class);
    }

    public function scopeSearch($query,$search)
    {
        $query->where('title','like','%'.$search.'%')->get();
        return $query;
    }
}
