<?php

namespace App\Http\Controllers\Country;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CountryController
{
    public function index(Country $country) {

        return new JsonResource(
          Country::all()
        );
    }
}
