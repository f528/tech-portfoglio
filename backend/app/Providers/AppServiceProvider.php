<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Force HTTPS URLs on Render (fixes mixed content upload errors)
        // Check if running on Render platform or if APP_ENV is production
        if (env('RENDER') || env('RENDER_EXTERNAL_URL') || config('app.env') === 'production') {
            \URL::forceScheme('https');
        }
        
        // Also force HTTPS for asset URLs
        if (env('RENDER') || env('RENDER_EXTERNAL_URL')) {
            \URL::forceRootUrl(config('app.url'));
        }
    }
}
