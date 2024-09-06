import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { todoListResolver } from './todo-list.resolver';

describe('todoListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => todoListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
