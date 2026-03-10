<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use App\Models\Subscription;
use Illuminate\Support\Facades\Mail;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Schedule::call(function () {

    $subs = Subscription::where('status','active')
        ->whereDate('end_date', now()->addDays(3))
        ->get();

    foreach ($subs as $sub) {
        Mail::to($sub->user->email)
            ->send(new \App\Mail\SubscriptionExpiringMail($sub));
    }

})->daily();