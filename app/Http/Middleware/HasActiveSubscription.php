<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HasActiveSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        $subscription = $request->user()
            ->subscriptions()
            ->where('status', 'active')
            ->latest()
            ->first();

        if ($subscription && $subscription->end_date < now()) {

            if ($subscription->auto_renew) {
                $subscription->update([
                    'start_date' => now(),
                    'end_date' => now()->addMonth(),
                ]);
            } else {
                $subscription->update([
                    'status' => 'expired'
                ]);
            }
        }
        if (!$subscription) {
            return redirect('/packs')
                ->with('error', 'Abonnement actif requis.');
        }

        return $next($request);
    }
}
