import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternElementComponent } from './pattern-element.component';

describe('PatternElementComponent', () => {
  let component: PatternElementComponent;
  let fixture: ComponentFixture<PatternElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatternElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
