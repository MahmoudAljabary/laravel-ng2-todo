import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import 'rxjs/RX';
import {Observable} from 'rxjs';
import {Task} from './task.interface';

@Injectable()
export class TaskService {
    private serverUrl = "http://localhost:8000/api/";

    constructor(private http: Http) {
    }

    getTasks(): Observable<any> {
        return this.http.get(this.serverUrl + "tasks")
            .map((response: Response) => {
                return response.json().tasks;
            });
    }

    addTask(body: string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.serverUrl + 'task', JSON.stringify({body: body}), {headers: headers})
    }

    deleteTask(id: number) {
        return this.http.delete(this.serverUrl + 'task/' + id);
    }

    completeTask(task: Task) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.serverUrl + 'task/' + task.id, JSON.stringify({completed: (!task.completed) ? 1 : 0}), {headers: headers})
            .map(
            (response: Response) => {
                return response.json().task;
            }
            );
    }
}