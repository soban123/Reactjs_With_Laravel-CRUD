<?php
Auth::routes();
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return view('');
});
Route::get('/home', function () {
    return view('myview');
});

// Route::get('users/{id?}', function ($id=3) {
//    return "hello".$id;
// });

Route::post('/usersapp', 'formcontroller@submit');

Route::get('/my' , 'Mycontroller@index');

// Rest
Route::get('/users' , 'myusercontroller@index');
Route::get('/users/{id}' , 'myusercontroller@show');

Route::post('/users' , 'myusercontroller@store');
Route::put('/users/update/{id}' , 'myusercontroller@update');
Route::delete('/users/delete/{id}' , 'myusercontroller@destroy');



// Route::redirect('/home', '/users');

