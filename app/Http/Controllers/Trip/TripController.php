<?php

namespace App\Http\Controllers\Trip;

use App\Models\City;
use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TripController
{
    public function index(City $city, Trip $trip)
    {
        return new JsonResource(
          $city->trips
        );
    }
}
