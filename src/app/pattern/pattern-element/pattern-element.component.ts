import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatternEltI } from './pattern-element.interface';

@Component({
  selector: 'app-pattern-element',
  standalone: true,
  imports: [],
  templateUrl: './pattern-element.component.html',
  styleUrl: './pattern-element.component.scss',
})
export class PatternElementComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  pattern!: PatternEltI[];
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.pattern = response.pattern as PatternEltI[];
    });
  }
}
