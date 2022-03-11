<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class OptionalLoginController extends Controller
{
    use TwoAuthLogin;
    /**
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function redirectToGoogleProvider()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * @param Request $request
     * @return false|\Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */
    public function handleGoogleProviderCallback(Request $request)
    {
         $user = Socialite::driver('google')->stateless()->user();
        if ($user) {
            $old_user = User::where('google_id', $user->getId())->first();
            if (!$old_user){

                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'password' => Hash::make(Str::random(10)),
                    'google_id' => $user->id,
                ]);
//                $newUser->sendEmailVerificationNotification();
                $newUser->markEmailAsVerified();
                auth()->loginUsingId($newUser->id);
                alert()->success('به پروفایل خود هدایت می شوید.','شما با موفقیت ثبت نام کردید');
                return redirect(route('profile'));

            } else {
                auth()->loginUsingId($old_user->id);
                alert()->success('به پروفایل خود هدایت می شوید.','شما با موفقیت وارد شدید');
                return $this->loggedIn($request,$old_user)?:redirect(route('profile'));
            }
        }
    }
}
