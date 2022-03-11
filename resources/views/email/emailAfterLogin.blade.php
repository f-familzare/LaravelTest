@component('mail::message')
<h1>{{$user->name}} عزیز شما با ip</h1>
<h1>{{request()->getClientIp()}} وارد حساب کاربری خود شدید .</h1>
<p>برای امنیت بیشتر تایید دو مرحله ای حساب خود را فعال کنید </p>
@component('mail::button',['url'=>url('login')])
ورود به حساب کاربری
@endcomponent
@endcomponent
