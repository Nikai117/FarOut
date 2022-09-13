<?php

namespace App\Http\Controllers\City;

use App\Models\City;
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
}
