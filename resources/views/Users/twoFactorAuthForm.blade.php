@extends('Users.profile-master')
@section('content')
    <div class="card card-info col-6 mx-auto ">
        <div class="card-header">
            <h3 class="card-title">احراز هویت دو مرحله ای</h3>
        </div>
        <form action="{{route('setTwoFactorAuthRegister')}}" class="card-body" method="post">
            @csrf
            <div class="form-group">
                <label>کد فعالسازی</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control @error('token') is-invalid @enderror" name="token" placeholder="کد فعالسازی را وارد کنید">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="fa fa-lock"></i></span>
                    </div>
                </div>
                @error('token')
                <span class="invalid-feedback d-block">
                    <strong>{{$massage}}</strong>
                </span>
                @enderror
            </div>

            <!-- /input-group -->
            <button class="btn btn-info">
                فعالسازی
            </button>
        </form>
        <!-- /.card-body -->
    </div>
@endsection
