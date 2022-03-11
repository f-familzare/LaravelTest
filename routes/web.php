<?php

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
    return view('welcome');

});

// Authentication Routes
Auth::routes(['verify'=>true]);

Route::middleware(['auth','verified'])->get('/home', 'HomeController@index')->name('home');

Route::namespace('Auth')->group(function (){
    // Optional Authentication Routes...
    // Google Routs

    Route::get('login/google', 'OptionalLoginController@redirectToGoogleProvider')->name('login.google');
    Route::get('login/google/callback', 'OptionalLoginController@handleGoogleProviderCallback')->name('login.google.callback');

    // Two FactorAuth

    Route::get('/2fa/login','TwoFactorController@getTwoFactorToken')->name('getTwoFactorAuthLogin');
    Route::post('/2fa/login','TwoFactorController@setTwoFactorToken')->name('setTwoFactorAuthLogin');
});


Route::namespace('User')->prefix('profile')->middleware(['auth','verified'])->group(function (){
    Route::get('/','UserController@index')->name('profile');
    Route::post('/update','UserController@update')->name('profile.update');
    Route::get('/2fa','TwoFactorAuthController@twoFactorAuth')->name('twoFactorAuth');
    Route::post('/2fa','TwoFactorAuthController@twoFactorAuthSubmit')->name('twoFactorAuthSubmit');
    Route::get('/2fa/verify','TwoFactorAuthController@getTwoFactorAuth')->name('getTwoFactorAuth');
    Route::post('/2fa/verify','TwoFactorAuthController@setTwoFactorAuthRegister')->name('setTwoFactorAuthRegister');
});
