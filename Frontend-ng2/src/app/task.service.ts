import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/RX';
import {Observable} from 'rxjs';

@Injectable()
export class TaskService {
    constructor(private http: Http) {

    }
    getTasks(): Observable<any> {
        return this.http.get("http://localhost:8000/api/tasks")
            .map((response: Response) => {
                return response.json();
            });
    }
}