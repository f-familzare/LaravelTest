<?php


namespace App\Http\Controllers\Auth;


use App\Model\TwoAuthToken;
use App\Notifications\EmailAfterLoginNotification;
use App\Notifications\TwoFactorAuthNotification;
use Illuminate\Http\Request;

trait TwoAuthLogin
{
    public function loggedIn(Request $request, $user)
    {

        if ($user->two_factor_auth !== 'off') {
            $this->HasTwoFactorAuthEnable($request, $user);
            return redirect(route('getTwoFactorAuthLogin'));
        }
        return false;
    }

    /**
     * @param Request $request
     * @param $user
     */
    public function HasTwoFactorAuthEnable(Request $request, $user): void
    {
        auth()->logout();
        $request->session()->flash('auth', [
            'user_id' => $user->id,
            'using_sms' => false,
            'remember' => $request->has('remember')
        ]);
        if ($user->two_factor_auth === 'sms') {
            $code = TwoAuthToken::codeGenerator($user);
            //Send Code
            $user->notify(new TwoFactorAuthNotification($code, $user->mobile));
            //redirect
            $request->session()->push('auth.using_sms', true);
            $user->notify(new EmailAfterLoginNotification($user));
        }
    }
}
