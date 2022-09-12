<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCustomerRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'email|required',
            'address' => 'required',
            'postal_code' => 'required',
            'city' => 'required',
            'country_code' => 'required',
            'phone' => 'required|numeric',
        ];
    }

    public function message()
    {
        return [
          'first_name.required' => 'First name is required',
          'last_name.required' => 'Last name is required',
          'email.required' => 'A Email is required',
          'email.email' => 'Please enter a valid email',
          'address.required' => 'PLease enter a valid address',
          'postal_code.required' => 'PLease enter a valid postal code',
          'city.required' => 'Please enter a valid city name',
          'country_code.required' => 'Please enter a valid country code',
          'phone.required' => 'please enter a phone number'
        ];
    }
}
