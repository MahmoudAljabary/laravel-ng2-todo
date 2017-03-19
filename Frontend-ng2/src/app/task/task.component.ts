import { Component, OnInit } from '@angular/core';
import { Task } from '../task.interface';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: Task;
  constructor() { }

  ngOnInit() {
  }

}
