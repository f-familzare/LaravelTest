<?php

namespace App\Notifications\Channels;

use Ghasedak\GhasedakApi;
use Illuminate\Notifications\Notification;

class GhasedakSmsChannel
{
    public function send($notifiable, Notification $notification)
    {
        if (! method_exists($notification, 'goToGhasedak')) {
            throw new \Exception("goToGhasedak Not Found");
        }
        $data = $notification->goToGhasedak($notifiable);
        $receptor = '0'.$data['receptor'];
        $massage = $data['massage'];
        $linenumber = $data['linenumber'];
        $api = new GhasedakApi(env('GHASEDAKAPI_KEY'));
        $api->SendSimple(
            $receptor, // receptor
            $massage, // message
            $linenumber // choose a line number from your account
        );
    }
}
