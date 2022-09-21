<?php

namespace App\Http\Resources\Trip;

use App\Models\Trip;
use Illuminate\Http\Resources\Json\JsonResource;

class TripResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        /** @var Trip $this */
          return [
              'id' => $this->id,          
              'city_id' => $this->city_id,
              'number_of_days' => $this->number_of_days,
              'departure_date' => $this->departure_date,
              'price' => $this->price,
          ];
    }
}
