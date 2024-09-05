import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { patternListGuard } from './pattern-list.guard';

describe('patternListGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => patternListGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
