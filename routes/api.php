<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\Reservation\ReservationController;
use App\Http\Controllers\City\CityController;
use App\Http\Controllers\Trip\TripController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [CustomerController::class, 'register']);
Route::resource('/customer/{customer}/reservations', ReservationController::class)->only(['index']);
Route::resource('/customer', CustomerController::class)->only(['show', 'index']);
Route::resource('/city', CityController::class)->only(['index']);
Route::resource('/city/{city}/trips', TripController::class)->only(['index']);
