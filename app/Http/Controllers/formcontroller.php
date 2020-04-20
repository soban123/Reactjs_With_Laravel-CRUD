<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class formcontroller extends Controller
{

    function submit(Request $request){

        $request->session()->flash('data' ,'yes');
        return redirect('/home');
       
            // return json_encode('sbs');
        }
    
}
