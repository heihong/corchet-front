import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatternElementService {
  http = inject(HttpClient);
  findPattern$(title: string) {
    return this.http.post('http://localhost:3000/findPattern', { title });
  }
}
