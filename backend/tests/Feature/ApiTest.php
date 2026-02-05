<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_api_portfolio_returns_successful_response(): void
    {
        $response = $this->get('/api/portfolio');

        $response->assertStatus(200);
    }
}
