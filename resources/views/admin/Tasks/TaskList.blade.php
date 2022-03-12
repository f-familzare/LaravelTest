@component('admin.layouts.panel-content',['title'=>'پنل مدیریت'])
    @slot('breadcrumb')
        <li class="breadcrumb-item">داشبورد</li>
        <li class="breadcrumb-item">کار</li>
        <li class="breadcrumb-item active">لیست کارها</li>
    @endslot

    @include('admin.Tasks.ToDoTasks')

    @include('admin.Tasks.DoingTasks')

    @include('admin.Tasks.DoneTasks')

@endcomponent
