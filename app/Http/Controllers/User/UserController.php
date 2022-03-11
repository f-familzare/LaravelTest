<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Site\TwoFactorAuthRequest;
use App\Model\TwoAuthToken;
use App\Notifications\TwoFactorAuthNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index()
    {
        return view('Users.index');
    }

    public function update(Request $request)
    {
        auth()->user()->update(array_merge([
            'name'=>$request->name,
            'email'=>$request->email,
            'skill'=>$request->skill,
            'about'=>$request->about
        ]));
        return back();
    }
}
