<?php

namespace App\Rules;

use GuzzleHttp\Client;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Http;

class RecapchaRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $response = Http::asForm()->post(env('reCAPTCHA_Url'), [
            'secret' => env('reCAPTCHA_Secret_Key'),
            'response' => $value,
            'remoteip' => request()->ip()

        ]);
        $response->throw();
        $response = $response->json();
        return $response['success'];

    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {

        return [
            'g-recaptcha-response.recaptcha' => 'اعتبارسنجی ریکپچا ناموفق بود',
            'g-recaptcha-response.required' => 'لطفا ریکپچا را تایید کنید'
        ];
    }
}
