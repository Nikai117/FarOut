<?php

namespace App\Http\Controllers\Country;

use App\Http\Controllers\Controller;
use App\Http\Resources\Country\CountryCollection;
use App\Http\Resources\Country\CountryResource;
use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CountryController
{
    public function index(Country $country) {

        return new CountryCollection(
          Country::all()
        );
    }
}
