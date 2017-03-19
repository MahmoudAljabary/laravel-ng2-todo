<?php

use Illuminate\Http\Request;

/*
  |--------------------------------------------------------------------------
  | API Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register API routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | is assigned the "api" middleware group. Enjoy building your API!
  |
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/* Tasks management */
Route::get('/tasks', [
    'uses' => 'TaskController@get'
]);
Route::post('/task', [
    'uses' => 'TaskController@post'
]);
Route::put('/task/{id}', [
    'uses' => 'TaskController@put'
]);
Route::delete('/task/{id}', [
    'uses' => 'TaskController@delete'
]);
