<?php

use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::post('/contact', [ContactController::class, 'send']);
