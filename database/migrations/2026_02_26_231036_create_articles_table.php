<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->string('slug')->unique();

            $table->longText('content');

            $table->string('image')->nullable();

            $table->enum('type', ['article', 'news'])->default('article');

            $table->enum('status', ['draft', 'published'])->default('draft');

            $table->integer('views')->default(0);

            $table->foreignId('author_id')
                ->constrained('users')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
