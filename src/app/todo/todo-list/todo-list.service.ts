import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { TodoI } from './todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  http = inject(HttpClient);
  getAllTodos$(limit: number): Observable<TodoI[]> {
    return this.http.post('http://localhost:3000/todosByLimit', {
      limit,
    }) as Observable<TodoI[]>;
  }

  searchTodo$(search: string | null): Observable<TodoI[]> {
    return this.http.post('http://localhost:3000/findTodos', {
      search,
    }) as Observable<TodoI[]>;
  }

  addTodo$(todo: TodoI): any {
    console.log(todo);
    return this.http.post('http://localhost:3000/todos', todo);
  }
}
