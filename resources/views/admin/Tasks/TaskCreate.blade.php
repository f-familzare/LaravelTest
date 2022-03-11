@component('admin.layouts.panel-content', ['title'=>'پنل مدیریت'])
    @slot('breadcrumb')
        <li class="breadcrumb-item"><a href="{{route('admin.panel')}}">داشبورد</a></li>
        <li class="breadcrumb-item"><a href="{{route('admin.users.index')}}">کاربران</a></li>
        <li class="breadcrumb-item">افزودن کار جدید</li>
    @endslot
    <div class="row ">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">افزودن کاربر جدید</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form class="form-horizontal" action="{{route('admin.tasks.store')}}" method="post">
                    @csrf
                    <div class="card-body">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="inputTitle" class=" control-label">عنوان کار</label>
                                    <input type="text" class="form-control @error('title') is-invalid @enderror"
                                           id="inputTitle"
                                           placeholder="عنوان کار را وارد کنید" name="title">
                                    @error('title')
                                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="inputDescription" class=" control-label">اعضا</label>
                                    <select name="users" id="userId" multiple class="form-control">
                                        <option value="0" disabled>کاربر/کاربران را انتخاب کنید</option>
                                        @foreach($users as $user)
                                            <option value="{{$user->id}}">{{$user->name}}</option>
                                        @endforeach
                                    </select>
                                    @error('users')
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
                                    <label for="inputDescription" class="control-label">توضیحات</label>
                                    <textarea class="form-control @error('description') is-invalid @enderror"
                                              aria-placeholder="توضیحات را وارد کنید" name="description"
                                              id="inputDescription" cols="30" rows="10"></textarea>
                                    @error('description')
                                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="inputDate" class="control-label">زمان پایان</label>
                                    <input type="datetime-local" class="form-control @error('expire_at') is-invalid @enderror"
                                           id="inputTitle"
                                           placeholder="مهلت انجام کار را وارد کنید" name="expire_at">
                                    @error('expire_at')
                                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

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
