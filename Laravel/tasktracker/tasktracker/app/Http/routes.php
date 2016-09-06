<?php

use App\Task;
use Illuminate\Http\Request;


Route::group(['middleware' => ['web']], function () {


	Route::get('/', function () {
	    return view('welcome');
	})->middleware('guest');

	// These are behind the auth
	Route::get('/tasks', 'TaskController@index');
	Route::post('/task', 'TaskController@store');
	Route::delete('/task/{task}', 'TaskController@destroy');

	// Authentication Routes...
	Route::auth();

});
