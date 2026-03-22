<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Articles;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\ArticleSlugHistory;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    // CRUD pour les articles et news
    // Affichage, création, édition, suppression, gestion des images et redirections basées sur les slugs

    public function index()
    {
        $articles = \App\Models\Articles::with('author')
            ->latest()
            ->get();

        return Inertia::render('Admin/Articles/Index', [
            'articles' => $articles
        ]);
    }
    //create article
    public function create()
    {
        return Inertia::render('Admin/Articles/Create');
    }
    //store article
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'type' => 'required|in:article,news',
            'image' => 'nullable|image|max:8192',
            'file' => 'nullable|mimes:pdf,doc,docx,ppt,pptx,mp4|max:20000',
            'video_url' => 'nullable|url',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {

            $image = $request->file('image');

            $manager = new ImageManager(new Driver());

            $compressed = $manager->read($image)
                ->resize(1200, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->toJpeg(80);

            $imageName = time() . '.jpg';

            Storage::disk('public')
                ->put("articles/$imageName", (string) $compressed);

            $imagePath = "articles/$imageName";
        }

        $filePath = null;

        if ($request->hasFile('file')) {

            $file = $request->file('file');

            $filePath = $file->store('articles/files', 'public');

            $fileType = $file->getClientOriginalExtension();
        }

        Articles::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'type' => $request->type,
            'status' => $request->status ?? 'draft',
            'image' => $imagePath,
            'author_id' => 1,
            'author_name' => 'Africa Training Team',
            'meta_title' => $request->meta_title,
            'meta_description' => $request->meta_description,
            'meta_keywords' => $request->meta_keywords,
            'file' => $filePath ?? null,
            'file_type' => $fileType ?? null,
            'video_url' => $request->video_url,
        ]);

        return redirect()->route('admin.dashboard')
            ->with('success', 'Publication créée');
    }
    //delete article
    public function destroy(Articles $article)
    {
        $article->delete();

        return back()->with('success', 'Supprimé');
    }
    //edit article
    public function edit(Articles $article)
    {
        return Inertia::render('Admin/Articles/Edit', [
            'article' => $article
        ]);
    }
    //update article
    public function update(Request $request, Articles $article)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            // 'image' => 'nullable|image|max:4096',
            'file' => 'nullable|mimes:pdf,doc,docx,ppt,pptx,mp4|max:20000',
        ]);

        $imagePath = $article->image; // on garde l’ancienne image par défaut

        if ($request->hasFile('image')) {

            //  Supprimer l’ancienne image si elle existe physiquement
            if (
                $article->image &&
                Storage::disk( 'public')->exists($article->image)
            ) {
                Storage::disk( 'public')->delete($article->image);
            }

            $image = $request->file('image');

            $manager = new ImageManager(new Driver());

            $compressed = $manager->read($image)
                ->resize(1200, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->toJpeg(80);

            $imageName = time() . '.jpg';

            Storage::disk('public')
                ->put("articles/$imageName", (string) $compressed);

            $imagePath = "articles/$imageName";
        }

        $filePath = $article->file;

        if ($request->hasFile('file')) {

            if (
                $article->file &&
                Storage::disk( 'public')->exists($article->file)
            ) {
                Storage::disk( 'public')->delete($article->file);
            }

            $file = $request->file('file');

            $filePath = $file->store('articles/files', 'public');

            $fileType = $file->getClientOriginalExtension();
        }

        $article->update([
            'title' => $request->title,
            'content' => $request->content,
            'type' => $request->type,
            'status' => $request->status,
            'image' => $imagePath ?? null,
            'author_name' => 'Africa Training Team',
            'meta_title' => $request->meta_title,
            'meta_description' => $request->meta_description,
            'meta_keywords' => $request->meta_keywords,
            'file' => $filePath ?? null,
            'file_type' => $fileType ?? null,
            'video_url' => $request->video_url,
        ]);

        return redirect()
            ->route('admin.articles.index')
            ->with('success', 'Article mis à jour');
    }

    //upload image for editor
    public function uploadEditorImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048'
        ]);

        $path = $request->file('image')
            ->store('articles/editor', 'public');

        return response()->json([
            'url' => asset("storage/$path")
        ]);
    }
    //show article with slug and handle redirection if slug changed
    public function show($slug)
    {
        $article = Articles::where('slug', $slug)
            ->where('status', 'published')
            ->first();

        $related = Articles::where('status', 'published')
            ->where('id', '!=', $article->id)
            ->latest()
            ->take(3)
            ->get(['id', 'title', 'slug', 'image', 'created_at', 'meta_description']);

        if (!$article) {

            $history = ArticleSlugHistory::where('old_slug', $slug)->first();

            if ($history) {

                $article = $history->article;

                if ($article && $article->status === 'published') {

                    return redirect()
                        ->route('articles.show', $article->slug)
                        ->setStatusCode(301);
                }
            }

            abort(404);
        }

        $article->increment('views');

        return Inertia::render('Articles/Show', [
            'article' => $article,
            'related' => $related,
            'tags' => $article->meta_keywords
                ? array_map('trim', explode(',', $article->meta_keywords))
                : [],
        ]);
    }
    // publier un article
    public function publish(Articles $article)
    {
        if ($article->status === 'draft') {
            $article->update([
                'status' => 'published'
            ]);
        }


        return redirect()
            ->route('admin.articles.index')
            ->with('success', 'Article publié');
    }
    // repasser un article en brouillon
    public function unpublish(Articles $article)
    {
        if ($article->status === 'published') {
            $article->update([
                'status' => 'draft'
            ]);
        }

        return redirect()
            ->route('admin.articles.index')
            ->with('success', 'Article repassé en brouillon');
    }
    //download
    public function download(Articles $article)
    {
        if (!auth()->check()) {
            return redirect('/login');
        }

        // Exemple si abonnement requis
        // if (!auth()->user()->hasActiveSubscription()) {
        //     abort(403, "Abonnement requis");
        // }

        $article->increment('downloads');

        return response()->download(
            storage_path("app/public/" . $article->file)
        );
    }
    //
}
