import { ActivatedRoute, ResolveFn } from '@angular/router';
import { PatternElementService } from './pattern-element.service';
import { inject } from '@angular/core';

export const patternElementResolver: ResolveFn<any> = (route, state) => {
  const patternElementService = inject(PatternElementService);
  return patternElementService.findPattern$((route.params as any).title);
};
