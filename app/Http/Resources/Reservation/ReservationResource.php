<?php

declare(strict_types=1);

namespace App\Http\Resources\Reservation;

use App\Models\Reservation;
use Illuminate\Http\Resources\Json\JsonResource;

class ReservationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        /** @var Reservation $this */
        return [
            'customer_id' => $this->customer_id,
            'trip_id' => $this->reservation_date,
            'number_of_children' => $this->number_of_children,
            'number_of_adults' => $this->number_of_adults,
            'paid' => $this->paid
        ];
    }
}
