@component('admin.layouts.panel-content', ['title'=>'پنل مدیریت'])
    @slot('breadcrumb')
        <li class="breadcrumb-item"><a href="{{route('admin.panel')}}">داشبورد</a></li>
        <li class="breadcrumb-item"><a href="{{route('admin.users.index')}}">کاربران</a></li>
        <li class="breadcrumb-item">افزودن کاربر جدید</li>
    @endslot
    <div class="row ">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">افزودن کاربر جدید</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form class="form-horizontal" action="{{route('admin.users.store')}}" method="post">
                    @csrf
                    <div class="card-body">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="inputName" class=" control-label">نام و نام خانوادگی</label>
                                    <input type="text" class="form-control @error('name') is-invalid @enderror"
                                           id="inputName"
                                           placeholder="نام و نام خانوادگی را وارد کنید" name="name">
                                    @error('name')
                                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div class="col-md-6">
                                    <label for="inputEmail3" class=" control-label">ایمیل</label>
                                    <input type="email" class="form-control @error('email') is-invalid @enderror"
                                           id="inputEmail3"
                                           placeholder="ایمیل را وارد کنید" name="email">
                                    @error('email')
                                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>
                        </div>


                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="inputPassword" class="control-label">پسورد</label>
                                    <input type="password" class="form-control @error('password') is-invalid @enderror"
                                           id="inputPassword"
                                           placeholder="پسورد را وارد کنید" name="password">
                                    @error('password')
                                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div class="col-md-6">
                                    <label for="inputPassword1" class="control-label">تکرار پسورد</label>
                                    <input type="password" class="form-control @error('password') is-invalid @enderror"
                                           id="inputPassword1"
                                           placeholder="پسورد را وارد کنید" name="password_confirmation">

                                    @error('password')
                                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div class="col-md-6">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="verify" name="verify">
                                        <label class="form-check-label" for="verify">ایمیل حساب کاربری تایید شود.</label>
                                    </div>
                                    @error('verify')
                                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <button type="submit" class="btn btn-info">ایجاد</button>
                        <button type="reset" class="btn btn-default float-left">لغو</button>
                    </div>
                    <!-- /.card-footer -->
                </form>
            </div>
        </div>

    </div>
@endcomponent
