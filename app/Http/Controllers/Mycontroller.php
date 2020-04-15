<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Mycontroller extends Controller
{
    function index(){
        // return view('myview',['data'=>$name]) ;
        return $users = DB::table('myusers')
        ->get();
    }
}
