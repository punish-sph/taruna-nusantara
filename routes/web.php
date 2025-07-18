<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('LandingPage');
});


// Auth ROutes
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::get('/register', [AuthController::class,'showRegisterForm'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/siswa', function() {
    return inertia('Student/Dashboard');
})->middleware('auth');

Route::get('/structure', function () {
    return inertia('Landing/Structure');
});

Route::get('/news', function () {
    return inertia('Landing/News');
});

Route::get('/achievement', function () {
    return inertia('Landing/Achievement');
});

Route::get('/facility', function () {
    return inertia('Landing/Facility');
});