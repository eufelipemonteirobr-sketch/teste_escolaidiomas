<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
{
    return Student::with('course')->get();
}

    public function store(Request $request)
    {
        $student = Student::create($request->all());

        return response()->json($student, 201);
    }

    public function show(string $id)
    {
        return Student::with('course')->findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $student = Student::findOrFail($id);

        $student->update($request->all());

        return response()->json($student);
    }

    public function destroy(string $id)
    {
        $student = Student::findOrFail($id);

        $student->delete();

        return response()->json([
            'message' => 'Aluno removido com sucesso'
        ]);
    }
}