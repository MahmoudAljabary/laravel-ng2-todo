<?php

namespace App\Http\Controllers;

use App\Task;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskController extends Controller {

    // get all tasks 
    public function get() {
        $tasks = Task::all();
        $response = [
            'tasks' => $tasks
        ];
        return response()->json($response, 200);
    }

    // post a new task
    public function post(Request $request) {
        $task = new Task();
        $task->body = $request->input('body');
        $task->save();
        return response()->json(['task' => $task], 201);
    }

    //update a task
    public function put(Request $request, $id) {
        $task = Task::find($id);
        if (!$task) {
            return response()->json(['message' => 'Task was not found'], 404);
        }
        $body = $request->input('body');
        if ($body) {
            $task->body = $body;
        }
        $task->completed = $request->input('completed');

        $task->save();
        return response()->json(['task' => $task], 200);
    }

    //delete a task
    public function delete($id) {
        $task = Task::find($id);
        $task->delete();
        return response()->json(['message' => 'Task has been deleted'], 200);
    }

}
