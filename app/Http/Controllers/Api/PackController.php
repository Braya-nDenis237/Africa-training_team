<?php

namespace App\Http\Controllers\Api;

use App\Models\Pack;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PackController extends Controller
{
    public function index()
    {
        return Pack::where('is_active', true)->get();
    }
}
