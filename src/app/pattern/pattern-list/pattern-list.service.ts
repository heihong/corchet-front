import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatternI } from './pattern-list.interface';

@Injectable({
  providedIn: 'root',
})
export class PatternService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/pattern';
  readonly getPatterns$ = () => this.http.get(`${this.url}/getAllPattern`);

  sendPatterns$(pattern: PatternI) {
    return this.http.post(`${this.url}/sendPattern`, pattern, {
      responseType: 'text',
    });
  }
}
