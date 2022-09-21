<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Trip extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'city_id',
        'number_of_days',
        'departure_date',
        'price',
    ];

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }
}
