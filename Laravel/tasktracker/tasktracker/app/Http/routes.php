<?php

use App\Task;
use Illuminate\Http\Request;


// Authentication Routes...
Route::auth();


// "Stub(bed) out routes", to be changed... are these behind the auth routes yet???
Route::get('/tasks', 'TaskController@index');
Route::post('/task', 'TaskController@store');
Route::delete('/task/{task}', 'TaskController@destroy');