import { ResolveFn } from '@angular/router';
import { PatternService } from './pattern.service';
import { inject } from '@angular/core';

export const patternResolver: ResolveFn<any> = (route, state) => {
  const patternService = inject(PatternService);
  return patternService.getPattern$();
};
