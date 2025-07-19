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
        Schema::dropIfExists("students");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained()->onDelete('cascade');
            $table->string('nisn')->unique()->nullable();
            $table->string('tempat_lahir')->nullable();
            $table->date('tanggal_lahir')->nullable();
            $table->enum('jenis_kelamin', ['L', 'P'])->nullable();
            $table->text('alamat')->nullable();
            $table->string('nik')->unique()->nullable();
            $table->string('nomor_kk')->nullable();
            $table->string('no_hp')->nullable();
            $table->enum('agama', ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu'])->nullable();
            $table->string('pass_foto_path')->nullable();
            $table->string('akta_kelahiran_path')->nullable();
            $table->string('ijazah_path')->nullable();
            $table->string('raport_path')->nullable();
            $table->timestamps();
        });
    }
};
