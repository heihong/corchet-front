import { TestBed } from '@angular/core/testing';

import { PatternElementService } from './pattern-element.service';

describe('PatternElementService', () => {
  let service: PatternElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatternElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
