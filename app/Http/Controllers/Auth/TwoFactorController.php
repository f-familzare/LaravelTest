<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Model\TwoAuthToken;
use App\Notifications\EmailAfterLoginNotification;
use App\User;
use Illuminate\Http\Request;

class TwoFactorController extends Controller
{
    public function getTwoFactorToken(Request $request)
    {
        $this->hasAuthSession($request);
        $request->session()->reflash();

        return view('Auth.twoFactorAuthLogin');
    }

    public function setTwoFactorToken(Request $request)
    {
        $this->validate($request, ['token' => 'required|size:6']);
        $this->hasAuthSession($request);
        $user = User::findOrFail($request->session()->get('auth.user_id'));
        $status = TwoAuthToken::isValid($request->token, $user);
        if (!$status) {
            alert()->error('2 دقیقه دیگر مجدد تلاش کنید', 'کد صحیح نبود');
            return redirect(route('login'));
        }

        if (auth()->loginUsingId($user->id, $request->session()->get('auth.remember'))) {
            $user->notify(new EmailAfterLoginNotification($user));
            auth()->user()->twoAuthToken()->delete();
            alert()->success('به پروفایل خود هدایت می شوید', 'با موفقیت وارد شدید');
            return redirect('/');
        }
        alert()->error('2 دقیقه دیگر مجدد تلاش کنید', 'کد صحیح نبود');
        return redirect(route('login'));

    }

    public function hasAuthSession(Request $request)
    {
        if (!$request->session()->has('auth')) {
            return redirect(route('login'));
        }
    }
}
