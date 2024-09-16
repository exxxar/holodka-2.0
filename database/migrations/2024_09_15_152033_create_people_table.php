<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('persons', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->nullable();
            $table->integer('age')->default(0);
            $table->string('birthday', 255)->nullable();
            $table->string('vk_group_link', 255)->nullable();
            $table->string('vk_user_link', 255)->nullable();
            $table->string('city', 255)->nullable();
            $table->string('from', 255)->nullable();
            $table->string('common_count', 255)->nullable();
            $table->string('home_town', 255)->nullable();
            $table->string('last_seen', 255)->nullable();
            $table->boolean('is_profile_closed')->default(false);
            $table->boolean('is_messages_closed')->default(false);
            $table->string('deactivated')->nullable();
            $table->foreignId('owner_id')->constrained('users');
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('persons');
    }
};
