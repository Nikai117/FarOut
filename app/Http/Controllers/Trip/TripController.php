<?php

namespace App\Http\Controllers\Trip;

use App\Http\Resources\Trip\TripResource;
use App\Models\City;
use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TripController 
{
    public function index()
    {
        
        return new JsonResource(
            Trip::all()
        );
    }

    public function show(Trip $trip)
    {
        return new TripResource(
            $trip
        );
    }

    public function getAllTrips(Trip $trip)
    {
        return new JsonResource(
          Trip::all()
        );
    }
}
