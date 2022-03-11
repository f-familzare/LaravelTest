<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('about')->nullable();
            $table->string('skill')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->enum('two_factor_auth',['off','sms'])->default('off')->nullable();
            $table->string('mobile')->nullable();
            $table->string('password');
            $table->string('google_id')->nullable();
            $table->boolean('is_supervisor')->default(0);
            $table->boolean('is_staff')->default(0);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
