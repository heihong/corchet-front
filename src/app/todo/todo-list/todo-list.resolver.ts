import { ResolveFn } from '@angular/router';
import { TodoListService } from './todo-list.service';
import { inject } from '@angular/core';

export const todoListResolver: ResolveFn<any> = (route, state) => {
  const todoListService = inject(TodoListService);
  return todoListService.getAllTodos$(5);
};
