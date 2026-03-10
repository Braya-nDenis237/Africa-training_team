<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Visit;
use Illuminate\Support\Facades\Http;

class TrackVisit
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */


    public function handle($request, Closure $next)
    {
        try {

            $ip = $request->ip();

            // Éviter localhost
            if ($ip === '127.0.0.1' || $ip === '::1') {
                return $next($request);
            }

            $response = Http::timeout(3)
                ->get("http://ip-api.com/json/{$ip}");

            if ($response->successful()) {

                $country = $response->json()['country'] ?? 'Unknown';

                \App\Models\Visit::create([
                    'ip' => $ip,
                    'country' => $country,
                    'page' => $request->path(),
                ]);
            }
        } catch (\Exception $e) {
            // On ignore totalement l’erreur
        }

        return $next($request);
    }
}
