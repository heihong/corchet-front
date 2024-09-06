import { Routes } from '@angular/router';
import { PatternListComponent } from './pattern/pattern-list/pattern-list.component';
import { patternListResolver } from './pattern/pattern-list/pattern-list.resolver';
import { PatternElementComponent } from './pattern/pattern-element/pattern-element.component';
import { patternElementResolver } from './pattern/pattern-element/pattern-element.resolver';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: 'patterns',
    component: PatternListComponent,
    resolve: { patterns: patternListResolver },
  },
  {
    path: 'pattern/:title',
    component: PatternElementComponent,
    resolve: { pattern: patternElementResolver },
  },
  {
    path: 'todos',
    component: TodoListComponent,
  },
];
