<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\myuser ;
class myusercontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = myuser::all();
        return $result ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user  = new myuser();
    
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('pass');
        $user->status = "1" ;
        $user->role = $request->input('role');
        $user->save();

        return $request->input();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = myuser::find($id);
         return $user; 
           }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        return $id ;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = myuser::find($id);
        $user->name = $request->input('name');
        // $user->password = $request->input('pass');
        $user->email = $request->input('email');
        // $user->status = $request->input('status');
        $user->save();
        return $request->input();;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = myuser::find($id);
        $user->delete() ;

        return $user;
    }
}
