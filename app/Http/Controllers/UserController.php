<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $users = User::all();
        return Inertia::render('Users', [
            'users' => $users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'edit_url' => route('users.edit', $user->id),
                    'delete_url' => route('users.destroy', $user->id),
                ];
            }),
            'create_url' => route('users.create'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'thumbnail' => 'image|mimes:jpeg,png,jpg|max:2048',
            'password' => 'required|min:8|confirmed',
        ]);

        $dir_path = date('Y').'/'.date('m').'/';
        if($request->hasFile('thumbnail')) {
            // $thumbnail = $request->thumbnail->store('images', 'public');
            $thumbnail = $request->file('thumbnail');
        }

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'thumbnail' => $thumbnail->storeAs($dir_path . 'cover', rand() . '.' . $thumbnail->extension(), 'public') ?? null,
            'password' => bcrypt($request->password),
        ]);

        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Edit', [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email,'.$id
        ]);

        User::findOrFail($id)->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);
        return redirect()->route('users.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        Storage::disk('public')->delete($user->thumbnail);
        $user->delete();
        return redirect()->route('users.index');
    }
}
