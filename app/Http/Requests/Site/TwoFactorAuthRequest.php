<?php

namespace App\Http\Requests\Site;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TwoFactorAuthRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type'=>'required|in:off,sms',
            'mobile'=>'required_unless:type,off|size:10|unique:users',
            'mobile'=>Rule::unique('users', 'mobile')->ignore(auth()->user()->id),
        ];
    }
}
