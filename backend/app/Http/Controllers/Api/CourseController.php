<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        return Course::all();
    }

    public function store(Request $request)
    {
        $course = Course::create($request->all());

        return response()->json($course, 201);
    }

    public function show(string $id)
    {
        return Course::findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $course = Course::findOrFail($id);

        $course->update($request->all());

        return response()->json($course);
    }

    public function destroy(string $id)
    {
        $course = Course::findOrFail($id);

        $course->delete();

        return response()->json([
            'message' => 'Curso removido com sucesso'
        ]);
    }
}