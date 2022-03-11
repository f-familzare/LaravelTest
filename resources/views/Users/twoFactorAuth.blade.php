@extends('Users.profile-master')
@section('content')
    <div class="card card-info col-6 mx-auto ">
        <div class="card-header">
            <h3 class="card-title">احراز هویت دو مرحله ای</h3>
        </div>
        <form action="{{route('twoFactorAuthSubmit')}}" class="card-body" method="post">
            @csrf
            <div class="form-group">
                <label>انتخاب کنید</label>
                <select class="form-control @error('type') is-invalid @enderror"  name="type">
                    @foreach(config('twoAuthType.types') as $key=>$name)
                        <option value="{{$key}}" {{old('type'?? $key)|| auth()->user()->hasTwoFactorAuth($key)?'selected':''}}>{{$name}}</option>
                    @endforeach
                </select>

                @error('type')
                <span class="invalid-feedback d-block">
                    <strong>{{$massage}}</strong>
                </span>
                @enderror
            </div>
            <div class="form-group">
                <label>شماره موبایل</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control @error('mobile') is-invalid @enderror" name="mobile" placeholder="شماره موبایل خود را وارد کنید"
                           value="{{old('mobile',auth()->user()->mobile)}}">
                    <div class="input-group-append">
                        <span class="input-group-text">+98</span>
                    </div>
                </div>
                @error('mobile')
                <span class="invalid-feedback d-block" role="alert">
                        <strong>{{ $message }}</strong>
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
