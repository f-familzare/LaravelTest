<?php
// admin Panel Routes

Route::group([],function (){
    Route::get('/','PanelController@index')->name('panel');
    Route::resource('users','UserController');
    Route::get('/search/users', 'UserController@search')->name('users.search');
    Route::resource('tasks','TaskController');
});


