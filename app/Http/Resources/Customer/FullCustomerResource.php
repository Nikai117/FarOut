<?php

declare(strict_types=1);

namespace App\Http\Resources\Customer;

use App\Http\Resources\Reservation\ReservationResource;
use App\Models\Customer;
use Illuminate\Http\Resources\Json\JsonResource;

class FullCustomerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        /** @var Customer $this */
        return [
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'address' => $this->address,
            'postal_code' => $this->postal_code,
            'city' => $this->city,
            'country_code' => $this->country_code,
            'phone' => $this->phone,
            'reservations' => ReservationResource::collection($this->reservations),
            ];
    }
}
