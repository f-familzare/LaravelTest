<?php

if (!function_exists('routeIsActive')) {
    function routeIsActive($path, $active)
    {
        return request()->is($path) ? $active : '';
    }
}
