<?php

namespace App\Notifications;

use App\Notifications\Channels\GhasedakSmsChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TwoFactorAuthNotification extends Notification
{
    use Queueable;

    public $code;
    public $mobile;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($code, $mobile)
    {
        $this->code = $code;
        $this->mobile = $mobile;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [GhasedakSmsChannel::class];
    }

    public function goToGhasedak($notifiable)
    {
        return [
            'receptor' => $this->mobile,
            'massage' => "کد اهراز هویت شما : {$this->code} ",
            'linenumber' => '300002525'
        ];
    }
}
