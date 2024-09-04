import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pattern',
  standalone: true,
  imports: [],
  templateUrl: './pattern.component.html',
  styleUrl: './pattern.component.scss',
})
export class PatternComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  pattern: any;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.pattern = response.pattern;
    });
  }
}
