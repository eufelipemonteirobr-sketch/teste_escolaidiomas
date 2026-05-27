<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alunos extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'Cursos_id'
    ];

    public function Cursos()
    {
        return $this->belongsTo(Cursos::class);
    }
}
