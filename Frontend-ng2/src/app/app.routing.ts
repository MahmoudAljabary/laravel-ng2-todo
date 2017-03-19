import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';

const APP_ROUTES: Routes = [
    {
        path: '', component: TasksComponent 
    },
    {
        path: 'new-task', component: NewTaskComponent 
    },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);