@component('admin.layouts.panel-content', ['title'=>'پنل مدیریت'])
    @slot('breadcrumb')
        <li class="breadcrumb-item"><a href="{{route('admin.panel')}}">داشبورد</a></li>
        <li class="breadcrumb-item"><a href="{{route('admin.users.index')}}">کارها</a></li>
        <li class="breadcrumb-item">ویرایش کار : {{$task->title}}</li>
    @endslot
    <div class="row ">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">افزودن کار جدید</h3>
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
                                           placeholder="عنوان کار را وارد کنید" name="title" value="{{$task->title}}">
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
                                            <option
                                                {{in_array(trim($user->id), $task->user->pluck('id')->toArray()) ? 'selected':''}}
                                                value="{{$user->id}}">{{$user->name}}</option>
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
                                              id="inputDescription" cols="30"
                                              rows="10">{{$task->description}}</textarea>
                                    @error('description')
                                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="inputDate" class="control-label">زمان پایان</label>
                                    <input type="datetime-local"
                                           class="form-control @error('expire_at') is-invalid @enderror"
                                           id="inputTitle"
                                           placeholder="مهلت انجام کار را وارد کنید" name="expire_at"
                                           value="{{$task->expire_at}}">
                                    @error('expire_at')
                                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-lg-2">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <input type="radio" name="status" id="ToDo" value="ToDo" {{$task->status=='ToDo'?'checked':''}}>
                                            </span>
                                        </div>
                                        <input type="text" id="ToDo" class="form-control" value="انجام نشده" disabled>
                                    </div>
                                    <!-- /input-group -->
                                </div>

                                <div class="col-lg-2">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><input type="radio" name="status" id="Doing"
                                                                                  value="Doing" {{$task->status=='Doing'?'checked':''}}></span>
                                        </div>
                                        <input type="text" class="form-control" id="Doing" value="در حال انجام"
                                               disabled>
                                    </div>
                                    <!-- /input-group -->
                                </div>

                                <div class="col-lg-2">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><input type="radio" name="status" id="Done"
                                                                                  value="Done" {{$task->status=='Done'?'checked':''}}></span>
                                        </div>
                                        <input type="text" class="form-control" value="انجام شده" id="Done" disabled>
                                    </div>
                                    <!-- /input-group -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <button type="submit" class="btn btn-info">ویرایش</button>
                        <button type="reset" class="btn btn-default float-left">لغو</button>
                    </div>
                    <!-- /.card-footer -->
                </form>
            </div>
        </div>

    </div>
@endcomponent
