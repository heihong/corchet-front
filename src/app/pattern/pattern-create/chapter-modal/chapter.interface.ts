import { TodoI } from '../../../todo/todo.interface';

export interface chapterI {
  id?: number;
  title: string | null;
  todos: TodoI[];
}
