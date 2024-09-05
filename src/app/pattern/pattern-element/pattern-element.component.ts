import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pattern-element',
  standalone: true,
  imports: [],
  templateUrl: './pattern-element.component.html',
  styleUrl: './pattern-element.component.scss',
})
export class PatternElementComponent {
  activatedRoute = inject(ActivatedRoute);
  pattern: any;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.pattern = response.pattern[0];
    });
  }
}
