import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from './todo-list.service';
import { AsyncPipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { TodoI } from './todo.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnDestroy {
  activatedRoute = inject(ActivatedRoute);
  todoListService = inject(TodoListService);
  limit = 3;
  todos: Observable<TodoI[]> = this.todoListService.getAllTodos$(this.limit);
  searchResult!: Observable<TodoI[]>;
  search = new FormControl<string>('');
  number = new FormControl<number>(0);
  sub!: Subscription;
  moreTodo() {
    this.limit += 3;
    this.todos = this.todoListService.getAllTodos$(this.limit);
  }

  findTodo() {
    this.searchResult = this.todoListService.searchTodo$(this.search.value);
  }

  addTodo() {
    const todo: TodoI = {
      action: this.search.value,
      number: this.number.value,
    };
    this.sub = this.todoListService.addTodo$(todo).subscribe();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
