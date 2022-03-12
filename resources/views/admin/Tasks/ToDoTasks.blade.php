<div class="row ">
    <div class="card col-lg-12">
        <!-- /.card-header -->
        <div class="card-header">
            <h3 class="card-title">لیست کار های انجام نشده (ToDo)</h3>
            <div class="card-tools d-flex">
                <a href="{{route('admin.users.create')}}" class="btn btn-info ml-2">ایجاد کاربر جدید</a>
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
                    <th>عنوان کار</th>
                    <th>کاربر/کاربران</th>
                    <th>وضعیت</th>
                    <th>زمان اتمام</th>
                    <th></th>
                </tr>
                @php($i=1)
                @foreach($TodoTasks as $TodoTask)
                    <tr>
                        <td>{{$i++}}</td>
                        <td>{{$TodoTask->title}}</td>
                        <td>
                            @foreach($TodoTask->user as $user)
                                {{$user->name}}
                            @endforeach
                        </td>
                        <td><span
                                class="badge badge-danger">{{$TodoTask->status == 'ToDo'?'انجام نشده':''}}</span>
                        </td>
                        <td>{{$TodoTask->expire_at}}</td>
                        <td>
                            <div class="form-group d-flex">
                                <a href="{{route('admin.tasks.edit',['task'=>$TodoTask->id])}}"
                                   class="btn btn-sm btn-info"><i class="fa fa-pencil"></i></a>
                                    <form action="{{route('admin.tasks.destroy',['task'=>$TodoTask->id])}}" method="post">
                                        @csrf
                                        @method('DELETE')
                                        <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
                                    </form>
                            </div>

                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
        <!-- /.card-body -->
        <div class="card-footer">
            {{$TodoTasks->render()}}
        </div>
    </div>
    <!-- /.card -->
</div>