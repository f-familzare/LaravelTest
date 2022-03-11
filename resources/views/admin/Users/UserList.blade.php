@component('admin.layouts.panel-content',['title'=>'پنل مدیریت'])
    @slot('breadcrumb')
        <li class="breadcrumb-item">داشبورد</li>
        <li class="breadcrumb-item">کاربران</li>
        <li class="breadcrumb-item active">لیست کاربران</li>
    @endslot
    <div class="row ">
        <div class="card col-lg-12">
            <!-- /.card-header -->
            <div class="card-header">
                <h3 class="card-title">لیست کاربران</h3>
                <div class="card-tools d-flex">
                    <a href="{{route('admin.users.create')}}" class="btn btn-info ml-2">ایجاد کاربر جدید</a>
                    <a href="{{request()->fullUrlWithQuery(['admin'=>1])}}" class="btn btn-warning ml-2">کاربران مدیر</a>
                    <form action="{{route('admin.users.search')}}">
                        <div class="input-group input-group-sm">
                            <input type="text" name="search" class="form-control float-right"
                                   placeholder="جستجو">
                            <div class="input-group-append">
                                <label for="s-type"></label>
                                <select name="type" id="s-type" class="form-control">
                                    <option value="" disabled selected>بر اساس...</option>
                                    <option value="name">نام</option>
                                    <option value="email">ایمیل</option>
                                    <option value="mobile">موبایل</option>
                                </select>
                            </div>
                            <div class="input-group-append">
                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                    <tbody>
                    <tr>
                        <th>شماره</th>
                        <th>کاربر</th>
                        <th>ایمیل</th>
                        <th>وضعیت</th>
                        <th>موبایل</th>
                        <th></th>
                    </tr>
                    @php($i=1)
                    @foreach($users as $user)
                        <tr>
                            <td>{{$i++}}</td>
                            <td>{{$user->name}}</td>
                            <td><a href="mailto:{{$user->email}}">{{$user->email}}</a></td>
                            <td><span
                                    class="badge {{$user->email_verified_at == null?'badge-warning':'badge-success'}} ">{{$user->email_verified_at == null?'تایید نشده':'تایید شده'}}</span>
                            </td>
                            <td>{{is_null($user->modile)?'-':$user->modile}}</td>
                            <td>
                                <div class="form-group d-flex">
                                    <a href="{{route('admin.users.edit',['user'=>$user->id])}}"
                                       class="btn btn-sm btn-info"><i class="fa fa-pencil"></i></a>
                                    @can('delete',$user)
                                    <form action="{{route('admin.users.destroy',['user'=>$user->id])}}" method="post">
                                        @csrf
                                        @method('DELETE')
                                        <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
                                    </form>
                                    @endcan
                                </div>

                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                {{$users->render()}}
            </div>
        </div>
        <!-- /.card -->
    </div>

@endcomponent
