<?php

use App\Http\Controllers\Api\HealthCheckController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| GEARIFY API Routes
|--------------------------------------------------------------------------
|
| All routes defined here are automatically prefixed with `/api` and use
| the stateless `api` middleware group.
|
*/

Route::get('/health', HealthCheckController::class)->name('api.health');
