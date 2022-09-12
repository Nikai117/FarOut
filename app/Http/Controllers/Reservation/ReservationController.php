<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Resources\Reservation\ReservationResource;
use App\Http\Resources\Reservation\ReservationCollection;
use App\Models\Customer;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReservationController extends Reservation
{
    public function index(Customer $customer, Reservation $reservation)
    {
        return new ReservationCollection(
          $customer->reservations
        );
    }
}
