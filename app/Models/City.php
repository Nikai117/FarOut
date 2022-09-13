<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class City extends Model
{
    use HasFactory;

    protected $fillable = [
        'country_code',
        'description',
    ];

    public function trips(): HasMany
    {
        return $this->hasMany(Trip::class);
    }
}
