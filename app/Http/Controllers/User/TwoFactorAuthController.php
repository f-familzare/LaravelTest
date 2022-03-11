<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Site\TwoFactorAuthRequest;
use App\Model\TwoAuthToken;
use App\Notifications\TwoFactorAuthNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TwoFactorAuthController extends Controller
{

    public function twoFactorAuth()
    {
        return view('Users.twoFactorAuth');
    }


    public function twoFactorAuthSubmit(TwoFactorAuthRequest $request)
    {
        if ($request->type == 'off') {
            auth()->user()->update(['two_factor_auth' => 'off']);
            return back();
        }
        if ($request->type === 'sms') {
            //Verify Mobile Number ...
            if ($this->CheckUserHasMobile($request)) {
                return $this->VerifyMobileSendCode($request);
            } else {
                auth()->user()->update(['two_factor_auth' => 'sms']);
            }
            return back();        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|\Illuminate\View\View
     */
    public function getTwoFactorAuth(Request $request)
    {
        if ($request->session()->has('mobile')){
            $request->session()->reflash();
            return view('Users.twoFactorAuthForm');
        }
        return redirect(route('twoFactorAuth'));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function setTwoFactorAuthRegister(Request $request)
    {
        Validator::make($request->all(), [
            'token' => 'required',
        ]);
        $status=TwoAuthToken::isValid($request->token,auth()->user());
        if ($status){
            auth()->user()->update([
                'mobile'=>$request->session()->get('mobile'),
                'two_factor_auth'=>'sms'
            ]);
            auth()->user()->twoAuthToken()->delete();
            alert()->success('احراز هویت دو مرحله ای فعال شد','شماره شما با موفقیت تایید شد');
        }else{
            alert()->error('در صورت تمایل مجدد تلاش کنید','شماره شما تایید نشد');
        }
        return redirect(route('twoFactorAuth'));

    }

    /**
     * @param TwoFactorAuthRequest $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function VerifyMobileSendCode(TwoFactorAuthRequest $request)
    {
        $request->session()->flash('mobile', $request->mobile);
        //Create code
        $code = TwoAuthToken::codeGenerator(auth()->user());
        //send code to user
        auth()->user()->notify(new TwoFactorAuthNotification($code, $request->mobile));
        return redirect(route('getTwoFactorAuth'));
    }

    /**
     * @param TwoFactorAuthRequest $request
     * @return bool
     */
    public function CheckUserHasMobile(TwoFactorAuthRequest $request): bool
    {
        return auth()->user()->mobile !== $request->mobile || is_null(auth()->user()->mobile);
    }


}
