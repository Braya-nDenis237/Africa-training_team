<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArticleSlugHistory extends Model
{
    protected $fillable = [
        'article_id',
        'old_slug',
    ];

    public function article()
    {
        return $this->belongsTo(Articles::class);
    }
}