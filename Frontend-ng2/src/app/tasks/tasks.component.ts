import {Component, OnInit, Input} from '@angular/core';
import {Response} from '@angular/http';

import {Task} from '../task.interface';
import {TaskService} from '../task.service';


@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    tasks: Task[];
    @Input() task: Task;

    constructor(private taskService: TaskService) {}
    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this.taskService.getTasks()
            .subscribe(
            (tasks: Task[]) => this.tasks = tasks,
            (error: Response) => console.log(error)
            );
    }
    completeTask(task: Task) {
        this.taskService.completeTask(task)
            .subscribe(
            (task: Task) => this.task = task,
            (error: Response) => console.log(error)
            );
        //toggle
        if (task.completed) {
            task.completed = false;
        } else {
            task.completed = true;
        }
        console.log(task.id + ' ' + task.completed);
    }

    onDeleted(task: Task) {
        const position = this.tasks.findIndex(
            (taskEl: Task) => {
                return taskEl.id == task.id;
            }
        );
        this.tasks.splice(position, 1);
    }

    onDelete(task: Task) {
        this.taskService.deleteTask(task.id)
            .subscribe(
            () => {
                // output event emitter can be used here insted as well
                this.onDeleted(task);
                console.log('Task has been deleted');
            }
            );
    }
}
