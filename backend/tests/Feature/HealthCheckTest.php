<?php

namespace Tests\Feature;

use Tests\TestCase;

class HealthCheckTest extends TestCase
{
    public function test_api_health_endpoint_returns_gearify_status(): void
    {
        $response = $this->getJson('/api/health');

        $response
            ->assertStatus(200)
            ->assertJson([
                'status' => 'ok',
                'application' => 'GEARIFY',
                'tagline' => "Drive Better. We'll Take Care of the Rest.",
            ]);
    }
}
