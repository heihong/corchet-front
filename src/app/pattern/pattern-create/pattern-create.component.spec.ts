import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternCreateComponent } from './pattern-create.component';

describe('PatternCreateComponent', () => {
  let component: PatternCreateComponent;
  let fixture: ComponentFixture<PatternCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatternCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
