import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { patternResolver } from '../pattern.resolver';

describe('patternResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => patternResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
