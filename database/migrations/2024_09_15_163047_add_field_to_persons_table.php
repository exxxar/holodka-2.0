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
        Schema::table('persons', function (Blueprint $table) {
            $table->string("vk_id")->nullable();
            $table->timestamp("checked_at")->nullable();
            $table->integer("status")->default(0);
            $table->longText("checked_comment")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('persons', function (Blueprint $table) {
            $table->dropColumn("vk_id");
            $table->dropColumn("checked_at");
            $table->dropColumn("status");
            $table->dropColumn("checked_comment");
        });
    }
};
