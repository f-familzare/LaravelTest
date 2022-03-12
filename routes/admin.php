<?php
// admin Panel Routes

Route::group([],function (){
    Route::get('/','PanelController@index')->name('panel');
    Route::resource('users','UserController');
    Route::get('/search/users', 'UserController@search')->name('users.search');
    Route::resource('tasks','TaskController');
    Route::patch('tasks/doing/{task}', 'TaskController@addToDoing')->name('tasks.start');
    Route::patch('tasks/done/{task}', 'TaskController@addToDone')->name('tasks.done');
    Route::patch('tasks/todo/{task}', 'TaskController@addToDo')->name('tasks.restart');
});


