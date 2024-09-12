import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatternElementService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/pattern';
  findPattern$(title: string) {
    return this.http.post(`${this.url}/findPattern`, { title });
  }
}
