@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('تایید آدرس ایمیل') }}</div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('لینک راستی آزمایی جدید برای شما ایجاد و به ایمیل شما ارسال شد') }}
                        </div>
                    @endif

                    {{ __('لطفا پیش از ادامه ، به ایمیل خود مراجعه کرده و از طریق لینک ارسالی حساب خود را تایید کنید.') }}
                    {{ __('اگر ایمیل را دریافت نکرده اید') }},
                    <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                        @csrf
		                <button type="submit" class="btn btn-link p-0 m-0 align-baseline">{{ __('برای دریافت مجدد کلیک کنید') }}</button>.
	                </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
