<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PackController;

Route::get('/packs', [PackController::class, 'index']);