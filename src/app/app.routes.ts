import { Routes } from '@angular/router';
import { PatternComponent } from './pattern/pattern.component';
import { patternResolver } from './pattern/pattern.resolver';

export const routes: Routes = [
  {
    path: 'pattern',
    component: PatternComponent,
    resolve: { pattern: patternResolver },
  },
];
