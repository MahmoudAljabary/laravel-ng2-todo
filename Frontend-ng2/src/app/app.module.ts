import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { routing } from './app.routing';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
