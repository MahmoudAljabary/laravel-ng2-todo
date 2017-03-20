import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

import {TaskService} from '../task.service';
@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

    constructor(private taskService: TaskService) {}

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        this.taskService.addTask(form.value.body)
            .subscribe(
            () => alert('Your task has been stored to the database successfully!')
            );
        form.reset();
    }
}
