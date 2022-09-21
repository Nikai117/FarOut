<?php

declare(strict_types=1);

namespace App\Http\Resources\Country;

use App\Http\Resources\Reservation\CityResource;
use App\Models\Country;
use Illuminate\Http\Resources\Json\JsonResource;

class CountryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        /**  @var Country $this */
        return [
            'code' => $this->code,
            'description' => $this->description,
            'cities' => CityResource::collection($this->city),
        ];
    }
}
