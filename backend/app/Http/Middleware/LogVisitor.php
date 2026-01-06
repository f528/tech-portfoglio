<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LogVisitor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Log visitor information for non-dashboard and non-asset requests
        if (!$request->is('admin*') && !$request->is('livewire*')) {
            \App\Models\Visitor::create([
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'path' => $request->path(),
                'referrer' => $request->header('referer'),
            ]);
        }

        return $next($request);
    }
}
