<?php
declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Reservation extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'customer_id',
        'trip_id',
        'reservation_date',
        'number_of_adults',
        'number_of_children',
        'paid',
        ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }
}
