import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatternService {
  http = inject(HttpClient);
  readonly getPatterns$ = () => this.http.get('http://localhost:3000/pattern');
}
