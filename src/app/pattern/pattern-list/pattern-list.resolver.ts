import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PatternService } from './pattern-list.service';
import { Observable } from 'rxjs';

export const patternListResolver: ResolveFn<any> = (route, state) => {
  const patternService = inject(PatternService);
  return patternService.getPatterns$();
};
