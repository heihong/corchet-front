import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pattern-list',
  standalone: true,
  imports: [],
  templateUrl: './pattern-list.component.html',
  styleUrl: './pattern-list.component.scss',
})
export class PatternListComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  patterns: any;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.patterns = response.patterns;
    });
  }

  goToPattern(title: string) {
    this.router.navigate(['pattern', title]);
  }
}
