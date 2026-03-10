<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HasPack
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        $subscription = auth()->user()
            ->subscriptions()
            ->where('status', 'active')
            ->where('end_date', '>', now())
            ->first();

        if (!$subscription) {
            return redirect('/packs')
                ->with('error', 'Abonnement requis');
        }

        return $next($request);
    }
}
