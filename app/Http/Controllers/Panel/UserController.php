<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\Panel\UpdateUserRequest;
use App\Http\Requests\Panel\UserRequest;
use App\User;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:delete,user')->only('delete');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function index()
    {
        $users = User::paginate(20);
        $users = $this->shoeAdmin($users);
        return view('admin.Users.UserList', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.Users.UserCreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Routing\Redirector
     */
    public function store(UserRequest $request)
    {
        $user=User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);
        if ($request->has('verify')) {
            $user->markEmailAsVerified();
        }else{
            $user->sendEmailVerificationNotification();
        }
        return redirect(route('admin.users.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return view('admin.Users.UserEdit',['user'=>$user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserRequest $request
     * @param \App\User $user
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        if (is_null($request->password)){
            $user->update([
                'name' => $request['name'],
                'email' => $request['email'],
            ]);
        }
        if ($request->has('verify')){
            $user->sendEmailVerificationNotification();
        }else{
            $user->update([
                'name' => $request['name'],
                'email' => $request['email'],
                'password'=> Hash::make($request['password']
                )]);
        }
        alert()->success('اطلاعات کاربر با موفقیت ویرایش شد');
        return redirect(route('admin.users.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        alert()->success('کاربر با موفقیت حذف شد');
        return redirect(route('admin.users.index'));
    }

    /**
     * @param UserRequest $request
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ValidatePassword(Request $request): void
    {
        $this->validate($request, [
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    public function search()
    {
        $search=\request('search');
        $type=\request('type');
        $users=User::search($search,$type)->paginate(20);
        return view('admin.Users.UserList', ['users' => $users]);
    }

    public function sort()
    {
        $sort=\request('sort');
        $type=\request('type');
        $users=User::sort($sort,$type)->paginate(20);
        return view('admin.Users.UserList', ['users' => $users]);

    }

    /**
     * @param $users
     * @return mixed
     */
    public function shoeAdmin($users)
    {
        if (\request('admin')) {
            $users = User::sortAdmin()->paginate(20);
        }
        return $users;
    }

}
