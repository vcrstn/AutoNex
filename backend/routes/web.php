<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes (Pure JSON API Notice)
|--------------------------------------------------------------------------
|
| GEARIFY uses a decoupled Vue 3 + Vuetify SPA frontend (/frontend).
| Laravel Blade views are intentionally not used.
|
*/

Route::get('/', function () {
    return response()->json([
        'application' => config('app.name', 'GEARIFY'),
        'description' => 'Car Repair Shop Management System – Backend API',
        'tagline' => "Drive Better. We'll Take Care of the Rest.",
        'status' => 'running',
        'health_endpoint' => url('/api/health'),
    ]);
});
