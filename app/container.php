<?php

namespace App;

class container
{
    protected $servicesList = [];

    public function set($key,$service)
    {
         $this->servicesList[$key]=$service;
    }

    public function get($key)
    {
        if (isset($this->servicesList[$key])){
            return call_user_func($this->servicesList[$key]) ;
        }
    }
}
