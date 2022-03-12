<?php
// admin Panel Routes

Route::group([],function (){
    Route::get('/','PanelController@index')->name('panel');
// User Routes
    Route::resource('users','UserController');
    Route::get('/search/users', 'UserController@search')->name('users.search');
// Task Routes
    Route::resource('tasks','TaskController');
    Route::patch('tasks/doing/{task}', 'TaskController@addToDoing')->name('tasks.start');
    Route::patch('tasks/done/{task}', 'TaskController@addToDone')->name('tasks.done');
    Route::patch('tasks/todo/{task}', 'TaskController@addToDo')->name('tasks.restart');
    Route::get('/search/users', 'TaskController@search')->name('tasks.search');

});


