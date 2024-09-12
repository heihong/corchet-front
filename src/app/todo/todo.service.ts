import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { TodoI } from './todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/todos';
  getAllTodos$(limit: number): Observable<TodoI[]> {
    return this.http.post(`${this.url}/todosByLimit`, {
      limit,
    }) as Observable<TodoI[]>;
  }

  searchTodo$(search: string | null): Observable<TodoI[]> {
    return this.http.post(`${this.url}/findTodo`, {
      search,
    }) as Observable<TodoI[]>;
  }

  addTodo$(todo: TodoI): any {
    return this.http.post(`${this.url}/createTodo`, todo);
  }
}
