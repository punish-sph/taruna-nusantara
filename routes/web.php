<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('LandingPage');
});


// Auth ROutes
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');