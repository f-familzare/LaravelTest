<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
        <img src="/admin/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">پنل مدیریت</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar" style="direction: ltr">
        <div style="direction: rtl">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="https://www.gravatar.com/avatar/52f0fbcbedee04a121cba8dad1174462?s=200&d=mm&r=g" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">{{auth()->user()->name}}</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
                         with font-awesome or any other icon font library -->
                    <li class="nav-item">
                        <a href="{{route('admin.panel')}}" class="nav-link {{routeIsActive('panel','active')}}">
                            <i class="nav-icon fa fa-dashboard"></i>
                            <p>صفحه اصلی</p>
                        </a>
                    </li>
                    <li class="nav-item has-treeview {{routeIsActive('panel/users','menu-open')}} ">
                        <a href="#" class="nav-link {{routeIsActive('panel/users','active')}}">
                            <i class="nav-icon fa fa-users"></i>
                            <p>
                                کاربران
                                <i class="right fa fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="{{route('admin.users.index')}}" class="nav-link {{routeIsActive('panel/users','active')}}">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>لیست کاربران</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{route('admin.users.create')}}" class="nav-link {{routeIsActive('panel/users/create','active')}}">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>افزودن کاربر جدید</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>مدیریت دسترسی</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item has-treeview {{routeIsActive('panel/tasks','menu-open')}} ">
                        <a href="#" class="nav-link {{routeIsActive('panel/tasks','active')}}">
                            <i class="nav-icon fa fa-users"></i>
                            <p>
                                کارها
                                <i class="right fa fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="{{route('admin.tasks.index')}}" class="nav-link {{routeIsActive('panel/users','active')}}">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>لیست کارها</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{route('admin.tasks.create')}}" class="nav-link {{routeIsActive('panel/users/create','active')}}">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>افزودن کار جدید</p>
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li class="nav-item has-treeview menu-open">
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="{{route('logout')}}" class="nav-link" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    {{ __('خروج') }}
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
    </div>
    <!-- /.sidebar -->
</aside>
