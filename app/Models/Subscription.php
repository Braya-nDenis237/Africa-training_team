<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{

    protected $fillable = [
        'user_id',
        'pack_id',
        'status',
        'start_date',
        'end_date',
        'auto_renew'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pack()
    {
        return $this->belongsTo(Pack::class);
    }
}
