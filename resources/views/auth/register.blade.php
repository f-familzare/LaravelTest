@extends('layouts.app')

@section('content')
    <div class="login-box">
        <div class="login-logo">
            <a href="{{route('home')}}"><b>ثبت نام در سایت</b></a>
        </div>
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">فرم زیر را تکمیل کنید و ثبت نام بزنید</p>

                <form action="{{ route('register') }}" id="register-form" method="post">
                    @csrf
                    <div class="input-group mb-3">
                        <input type="text" class="form-control  @error('name') is-invalid @enderror"
                               placeholder="نام" name="name">
                        <div class="input-group-append">
                            <span class="fa fa-user input-group-text"></span>
                        </div>
                    </div>
                    @error('name')
                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
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
                        <div class="col-8">
                            <div class="checkbox icheck">
                                <label>
                                    <input type="checkbox" {{ old('remember') ? 'checked' : '' }} name="remember"> یاد
                                    آوری من
                                </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button type="submit" class="g-recaptcha btn btn-primary btn-block btn-flat"
                                    data-sitekey="{{env('reCAPTCHA_Site_Key')}}" data-callback='onSubmit'
                                    data-action="submit">ثبت نام
                            </button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

                <div class="social-auth-links text-center mb-3">
                    <p>- OR -</p>
                    <a href="#" class="btn btn-block btn-primary">
                        <i class="fa fa-linkedin mr-2"></i> ثبت نام با اکانت لینکدین
                    </a>
                    <a href="{{route('login.google')}}" class="btn btn-block btn-danger">
                        <i class="fa fa-google-plus mr-2"></i> ثبت نام با اکانت گوگل
                    </a>
                </div>
                <!-- /.social-auth-links -->
                @if (Route::has('password.request'))
                    <p class="mb-1">
                        <a href="{{route('password.request')}}">رمز عبورم را فراموش کرده ام.</a>
                    </p>
                @endif
                <p class="mb-0">
                    <a href="register.html" class="text-center">ثبت نام</a>
                </p>
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
            document.getElementById("register-form").submit();
        }
    </script>
@endsection
