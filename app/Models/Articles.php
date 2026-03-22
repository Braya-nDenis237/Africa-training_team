<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\ArticleSlugHistory;

class Articles extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'content',
        'image',
        'type',
        'status',
        'views',
        'author_id',
        'author_name',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'file',
        'file_type',
        'video_url',
    ];
    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
    public function slugHistories()
    {
        return $this->hasMany(ArticleSlugHistory::class);
    }


    protected static function boot()
    {
        parent::boot();

        static::updating(function ($article) {

            if ($article->isDirty('title')) {

                $oldSlug = $article->getOriginal('slug');

                // Éviter doublons
                if (
                    $oldSlug &&
                    !ArticleSlugHistory::where('old_slug', $oldSlug)->exists()
                ) {

                    ArticleSlugHistory::create([
                        'article_id' => $article->id,
                        'old_slug' => $oldSlug
                    ]);
                }

                // Génération nouveau slug unique
                $slug = Str::slug($article->title);
                $originalSlug = $slug;
                $counter = 1;

                while (
                    Articles::where('slug', $slug)
                    ->where('id', '!=', $article->id)
                    ->exists()
                    ||
                    ArticleSlugHistory::where('old_slug', $slug)->exists()
                ) {
                    $slug = $originalSlug . '-' . $counter;
                    $counter++;
                }

                $article->slug = $slug;
            }
        });
    }
}
