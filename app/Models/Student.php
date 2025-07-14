<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Student extends Model
{
    protected $fillable = [
        'user_id',
        'nisn',
        'tempat_lahir',
        'tanggal_lahir',
        'jenis_kelamin',
        'alamat',
        'nik',
        'nomor_kk',
        'no_hp',
        'agama',
        'pass_foto_path',
        'akta_kelahiran_path',
        'ijazah_path',
        'raport_path',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


}

