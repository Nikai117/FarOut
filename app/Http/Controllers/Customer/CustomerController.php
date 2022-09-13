<?php

namespace App\Http\Controllers\Customer;

use App\Http\Requests\CreateCustomerRequest;
use App\Http\Resources\Customer\CustomerResource;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CustomerController
{
    public function index()
    {
        return new JsonResource(
          Customer::all()
        );
    }
    public function register(CreateCustomerRequest $request){

        $customer = Customer::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'address' => $request->input('address'),
            'postal_code' => $request->input('postal_code'),
            'city' => $request->input('city'),
            'country_code' => $request->input('country_code'),
            'phone' => $request->input('phone'),
        ]);

        return new CustomerResource(
            $customer
        );

    }

    public function show(Customer $customer)
    {
        return new CustomerResource(
            $customer
        );
    }
}