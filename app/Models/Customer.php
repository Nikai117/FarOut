<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Customer extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
      'first_name',
      'last_name',
      'email',
      'address',
      'postal_code',
      'city',
      'country_code',
      'phone',

    ];

    public function reservations(): HasMany
    {
        return $this->hasMany(Reservation::class);
    }
}
