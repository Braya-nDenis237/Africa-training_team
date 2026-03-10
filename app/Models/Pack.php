<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pack extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'features',
        'is_active'
    ];

    protected $casts = [
        'features' => 'array',
    ];

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
