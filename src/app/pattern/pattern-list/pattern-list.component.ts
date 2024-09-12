import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { PatternI } from './pattern-list.interface';
import { patternListTexts } from '../../constants/texts';

@Component({
  selector: 'app-pattern-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pattern-list.component.html',
  styleUrl: './pattern-list.component.scss',
})
export class PatternListComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  _patternListTexts = patternListTexts;
  patterns!: PatternI[];
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.patterns = response.patterns as PatternI[];
    });
  }

  goToPattern(title: string) {
    this.router.navigate(['pattern', title]);
  }
}
