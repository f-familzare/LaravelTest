<?php

namespace App\Http\Controllers\Panel;

use App\Model\Task;
use Illuminate\Support\Facades\Request;

trait ChangeTaskStatus
{

    public function addToDoing(Request $request,Task $task)
    {
        $task->update([
            'status'=>'Doing'
        ]);
        alert()->success('وضعیت کار به در حال انجام تغییر کرد');
        return redirect()->back();
    }
    public function addToDone(Request $request,Task $task)
    {
        $task->update([
            'status'=>'Done'
        ]);
        alert()->success('وضعیت کار به انجام شده تغییر کرد');
        return redirect()->back();
    }
    public function addToDo(Request $request,Task $task)
    {
        $task->update([
            'status'=>'ToDo'
        ]);
        alert()->success('وضعیت کار به انجام نشده تغییر کرد');
        return redirect()->back();
    }
}
