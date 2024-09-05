import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { patternElementResolver } from './pattern-element.resolver';

describe('patternElementResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => patternElementResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
