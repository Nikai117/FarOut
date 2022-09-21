<?php

namespace App\Http\Controllers\Country;

use App\Http\Resources\Country\CountryCollection;
use App\Models\Country;

class CountryController
{
    public function index(Country $country) {

        return new CountryCollection(
          Country::all()
        );
    }
}
