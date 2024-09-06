import { TodoI } from '../../todo/todo-list/todo.interface';

export interface PatternEltI {
  title: string;
  chapter: chapterI[];
}

export interface chapterI {
  title: string;
  todos: TodoI[];
}
