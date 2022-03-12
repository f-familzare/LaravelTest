<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Model\Task;
use App\User;
use Illuminate\Http\Request;
use function Symfony\Component\String\u;

class TaskController extends Controller
{
    use ChangeTaskStatus;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $TodoTasks=Task::with('user')->whereStatus('ToDo')->latest()->paginate(20);
        $DoingTasks=Task::with('user')->whereStatus('Doing')->latest()->paginate(20);
        $DoneTasks=Task::with('user')->whereStatus('Done')->latest()->paginate(20);
        return view('admin.Tasks.TaskList',compact('TodoTasks','DoingTasks','DoneTasks'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users=User::all();
        return view('admin.Tasks.TaskCreate',compact('users'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $task=Task::create([
            'title'=>$request->input('title'),
            'description'=>$request->input('description'),
            'expire_at'=>$request->input('expire_at'),
            'status'=>$request->input('status'),
        ]);
        $task->user()->sync($request->input('users'));
        return redirect(route('admin.tasks.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        $users=User::all();
        return view('admin.Tasks.TaskEdit',compact('task','users'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $task->update([
            'title'=>$request->input('title'),
            'description'=>$request->input('description'),
            'expire_at'=>$request->input('expire_at'),
            'status'=>$request->input('status')
        ]);
        $task->user()->sync($request->input('users'));
        return redirect(route('admin.tasks.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        $task->user()->detach();
        $task->delete();
        return redirect(route('admin.tasks.index'));

    }
    public function search()
    {
        $search=\request('search');
        $type=\request('type');
        $users=Task::search($search)->paginate(20);
        return view('admin.Tasks.TaskList', ['task' => $users]);
    }

}
