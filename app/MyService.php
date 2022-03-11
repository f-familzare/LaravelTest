<?php

namespace App;

use Illuminate\Support\Facades\Facade;

class MyService extends Facade
{
    /**
     * @method static string something()
     */
    protected static function getFacadeAccessor()
    {
        return 'myclass';
    }

}
