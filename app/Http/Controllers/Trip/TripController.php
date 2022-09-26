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

    public function store(Request $request)
    {
        $trip = Trip::create([
            'city_id' => $request->input('city_id'),
            'number_of_days' => $request->input('number_of_days'),
            'departure_date' => $request->input('departure_date'),
            'price' => $request->input('price'),
        ]);

        return new TripResource(
            $trip
        );
    }
}
