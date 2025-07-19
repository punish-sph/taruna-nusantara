<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kategori_berita extends Model
{
    protected $fillable = [
        "name",
        "is_active",
    ];

    public function beritas()
    {
        return $this->hasMany(Berita::class);
    }
}
