<?php

namespace App\Http\Resources\Reservation;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Resources\Reservation\ReservationResource;

class ReservationCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'reservations' => ReservationResource::collection($this->resource)
        ];
    }
}
