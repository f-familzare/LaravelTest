@extends('layouts.app')

@section('content')
    <div class="login-box">
        <div class="login-logo">
            <a href="{{route('home')}}"><b>بازیابی رمز عبور</b></a>
        </div>
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">فرم زیر را تکمیل کنید و ورود را بزنید</p>

                <form action="{{ route('password.update') }}" id="reset-form" method="post">
                    @csrf
                    <input type="hidden" name="token" value="{{ $token }}">
                    <div class="input-group mb-3">
                        <input type="email" class="form-control  @error('email') is-invalid @enderror"
                               placeholder="ایمیل" name="email">
                        <div class="input-group-append">
                            <span class="fa fa-envelope input-group-text"></span>
                        </div>
                    </div>
                    @error('email')
                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                    <div class="input-group mb-3">
                        <input type="password" class="form-control  @error('password') is-invalid @enderror"
                               placeholder="رمز عبور" name="password">
                        <div class="input-group-append">
                            <span class="fa fa-lock input-group-text"></span>
                        </div>
                    </div>
                    @error('password')
                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                    <div class="input-group mb-3">
                        <input type="password" class="form-control  @error('password') is-invalid @enderror"
                               placeholder="تکرار رمز عبور" name="password_confirmation">
                        <div class="input-group-append">
                            <span class="fa fa-lock input-group-text"></span>
                        </div>
                    </div>
                    @error('password')
                    <span class="invalid-feedback d-block" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                    <div class="row">
                        <div class="col-8"></div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button name="g-recaptcha-response" class="g-recaptcha btn btn-primary btn-block btn-flat"
                                    data-sitekey="{{env('reCAPTCHA_Site_Key')}}" data-callback='onSubmit'
                                    data-action="submit" type="submit">تایید
                            </button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
    <!-- /.login-box -->

@endsection
@section('script')
    <script src="https://www.google.com/recaptcha/api.js?hl=fa"></script>
    <script>
        function onSubmit(token) {
            document.getElementById("reset-form").submit();
        }
    </script>
@endsection
