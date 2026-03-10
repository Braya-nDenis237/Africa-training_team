<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

use App\Models\User;
use App\Models\Pack;
use App\Models\Subscription;
use App\Models\Visit;
use App\Models\Articles;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfileAdminController;
use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Auth\GoogleController;

/*
|--------------------------------------------------------------------------
| Public
| ARTICLES WELCOME
|--------------------------------------------------------------------------
*/

Route::get('/', function () {

    $posts = Articles::where('status', 'published')
        ->latest()
        ->take(10)
        ->get();

    return Inertia::render('Welcome', [
        'posts' => $posts,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


/*
|--------------------------------------------------------------------------
| CLIENT DASHBOARD
|--------------------------------------------------------------------------
*/

Route::middleware('auth', 'verified')->group(function () {

    Route::get('/dashboard', function () {

        $user = auth()->user();

        //  Si admin → redirection vers admin
        if ($user->role === 'admin') {
            return redirect()->route('admin.dashboard');
        }

        $activeSubscription = $user->subscriptions()
            ->where('status', 'active')
            ->where('end_date', '>=', now())
            ->with('pack')
            ->latest()
            ->first();

        return Inertia::render('Dashboard', [
            'user' => $user,
            'subscription' => $activeSubscription,
            'subscriptions' => $user->subscriptions()
                ->with('pack')
                ->latest()
                ->get(),
            'packs' => Pack::orderBy('price')->get(),
        ]);
    })->name('dashboard');
});

/*
|--------------------------------------------------------------------------
| PROFILE (CLIENT)
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])
        ->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])
        ->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])
        ->name('profile.destroy');
});

/*
|--------------------------------------------------------------------------
| PROFILE (ADMIN)
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {

    Route::get('Admin/profile', [ProfileAdminController::class, 'editAdmin'])
        ->name('profile.editAdmin');

    Route::patch('Admin/profile', [ProfileAdminController::class, 'updateAdmin'])
        ->name('profile.updateAdmin');

    Route::delete('Admin/profile', [ProfileAdminController::class, 'destroyAdmin'])
        ->name('profile.destroyAdmin');
});

/*
|--------------------------------------------------------------------------
| PACKS & PREMIUM
|--------------------------------------------------------------------------
*/

Route::get('/packs', fn() => Inertia::render('Packs'));

Route::get('/premium', fn() => Inertia::render('Premium'))
    ->middleware(['auth', 'hasSubscription']);

Route::get('/premium-content', fn() => 'Contenu premium')
    ->middleware(['auth', 'hasPack']);

/*
|--------------------------------------------------------------------------
| GOOGLE AUTH
|--------------------------------------------------------------------------
*/

Route::get('/auth/google', [GoogleController::class, 'redirect']);
Route::get('/auth/google/callback', [GoogleController::class, 'callback']);

/*
|--------------------------------------------------------------------------
| SUBSCRIPTIONS
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {

    Route::post('/subscribe/{pack}', function (Pack $pack) {

        $user = auth()->user();
        // 🔒 Blocage admin
        if ($user->role === 'admin') {
            return redirect()->route('/')
                ->with('error', 'Les administrateurs n’ont pas besoin d’abonnement.');
        }

        $user->subscriptions()->update(['status' => 'expired']);

        $subscription = $user->subscriptions()->create([
            'pack_id' => $pack->id,
            'status' => 'active',
            'start_date' => now(),
            'end_date' => now()->addMonth()
        ]);

        Mail::to($user->email)
            ->send(new \App\Mail\SubscriptionCreatedMail($subscription));

        return redirect()->route('dashboard');
    });

    Route::post('/renew', function () {

        $user = auth()->user();
        // 🔒 Blocage admin
        if ($user->role === 'admin') {
            return redirect()->back()
                ->with('error', 'Les administrateurs n’ont pas besoin d’abonnement.');
        }

        $subscription = $user->subscriptions()
            ->where('status', 'active')
            ->where('end_date', '>', now())
            ->first();

        if (!$subscription) {
            return redirect()->route('dashboard');
        }

        $subscription->update(['status' => 'expired']);

        $user->subscriptions()->create([
            'pack_id' => $subscription->pack_id,
            'status' => 'active',
            'start_date' => now(),
            'end_date' => now()->addMonth()
        ]);

        return redirect()->route('dashboard')
            ->with('success', 'Abonnement renouvelé');
    })->name('renew');
});

/*
|--------------------------------------------------------------------------
| SUBSCRIPTIONS PUBLIQUE
|--------------------------------------------------------------------------
*/

Route::get('/PacksPublic', function () {
    return Inertia::render('PacksPublic');
})->name('PacksPublic');


/*
|--------------------------------------------------------------------------
| ADMIN SECTION
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        /*
        | Dashboard Admin
        */

        Route::get('/dashboard', function () {

            $totalUsers = User::where('role', '!=', 'admin')->count();

            $activeSubs = Subscription::where('status', 'active')->count();
            $expiredSubs = Subscription::where('status', 'expired')->count();

            $totalRevenue = Subscription::with('pack')
                ->get()
                ->sum(fn($sub) => $sub->pack->price ?? 0);

            $monthlyRevenue = Subscription::whereMonth('created_at', now()->month)
                ->whereYear('created_at', now()->year)
                ->with('pack')
                ->get()
                ->sum(fn($sub) => $sub->pack->price ?? 0);

            // 📚 ARTICLES
            $totalArticles = Articles::where('type', 'article')->count();
            $totalNews = Articles::where('type', 'news')->count();

            $pendingArticles = Articles::where('status', 'draft')->count();
            $publishedArticles = Articles::where('status', 'published')->count();

            $articlesThisMonth = Articles::whereMonth('created_at', now()->month)
                ->whereYear('created_at', now()->year)
                ->count();

            // 👁 VISITES
            $totalVisits = Visit::count();
            $uniqueVisitors = Visit::distinct('ip')->count('ip');

            //Subcribers
            $activeSubs = Subscription::where('status', 'active')
                ->where('end_date', '>=', now())
                ->count();

            $expiredSubs = Subscription::where(function ($query) {
                $query->where('status', 'expired')
                    ->orWhere('status', 'cancelled');
            })
                ->orWhere(function ($query) {
                    $query->where('status', 'active')
                        ->where('end_date', '<', now());
                })
                ->count();

            $conversionRate = $uniqueVisitors > 0
                ? round(($activeSubs / $uniqueVisitors) * 100, 2)
                : 0;

            return Inertia::render('Admin/Dashboard', [
                'totalUsers' => $totalUsers,
                'activeSubs' => $activeSubs,
                'expiredSubs' => $expiredSubs,
                'totalRevenue' => $totalRevenue,
                'monthlyRevenue' => $monthlyRevenue,

                'totalArticles' => $totalArticles,
                'totalNews' => $totalNews,
                'pendingArticles' => $pendingArticles,
                'publishedArticles' => $publishedArticles,
                'articlesThisMonth' => $articlesThisMonth,

                'totalVisits' => $totalVisits,
                'uniqueVisitors' => $uniqueVisitors,
                'conversionRate' => $conversionRate,
            ]);
        })->name('dashboard');

        /*
        | Articles CRUD
        */

        Route::resource('articles', ArticleController::class);

        Route::put(
            'articles/{article}/publish',
            [ArticleController::class, 'publish']
        )->name('articles.publish');

        Route::put(
            'articles/{article}/unpublish',
            [ArticleController::class, 'unpublish']
        )->name('articles.unpublish');
    });

/*
|--------------------------------------------------------------------------
| PUBLIC ARTICLES
|--------------------------------------------------------------------------
*/

Route::get(
    '/articles/{slug}',
    [ArticleController::class, 'show']
);

/*
|--------------------------------------------------------------------------
| EDITOR IMAGE UPLOAD
|--------------------------------------------------------------------------
*/

Route::post(
    '/admin/upload-editor-image',
    [ArticleController::class, 'uploadEditorImage']
);

/*
|--------------------------------------------------------------------------
| about page
|--------------------------------------------------------------------------
*/

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

/*
|--------------------------------------------------------------------------
| activite page
|--------------------------------------------------------------------------
*/

Route::get('/activites/{slug}', function ($slug) {
    return Inertia::render('Activite/Show', [
        'slug' => $slug
    ]);
})->name('activites.show');

/*
|--------------------------------------------------------------------------
| articles page
|--------------------------------------------------------------------------
*/
Route::get('/ArticlesPublic', function () {
    $posts = Articles::where('status', 'published')
        ->latest()
        ->take(10)
        ->get();
    return Inertia::render('ArticlesPublic', [
        'posts' => $posts,
    ]);
})->name('articles.publics');

/*
|--------------------------------------------------------------------------
| contact page
|--------------------------------------------------------------------------
*/

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/contact', function (\Illuminate\Http\Request $request) {

    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email',
        'subject' => 'required|string|max:255',
        'message' => 'required|string',
    ]);

    \Illuminate\Support\Facades\Mail::raw(
        "Nom: {$request->name}\nEmail: {$request->email}\n\n{$request->message}",
        function ($mail) use ($request) {
            $mail->to('direction@africa-trainingteam.com')
                 ->subject($request->subject);
        }
    );

    return back()->with('success', 'Message envoyé avec succès.');
});

require __DIR__ . '/auth.php';
