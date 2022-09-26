<?php

namespace App\Http\Controllers\City;

use App\Http\Resources\City\CityResource;
use App\Models\City;
use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CityController
{
    public function index()
    {
        return new JsonResource(
          City::all()
        );
    }

    public function getTrips(City $city, Trip $trip)
    {

      return new JsonResource(
          $city->trips
      );

    }

}
