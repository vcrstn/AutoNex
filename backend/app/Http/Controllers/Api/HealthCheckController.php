<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Config;

class HealthCheckController extends Controller
{
    /**
     * GEARIFY REST API Health-Check Endpoint
     *
     * GET /api/health
     */
    public function __invoke(): JsonResponse
    {
        return response()->json([
            'status' => 'ok',
            'application' => Config::get('app.name', 'GEARIFY'),
            'description' => 'Car Repair Shop Management System – RESTful API',
            'tagline' => "Drive Better. We'll Take Care of the Rest.",
            'version' => '1.0.0-phase1',
            'environment' => Config::get('app.env'),
            'database_driver' => Config::get('database.default'),
            'timestamp' => now()->toIso8601String(),
        ]);
    }
}
