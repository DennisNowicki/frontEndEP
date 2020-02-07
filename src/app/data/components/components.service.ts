import { Injectable, Component } from '@angular/core';
import { Components } from './components.model';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  url = 'http://localhost:3000/components';

  constructor(private http: HttpClient) { }

  getComponents(): Observable<Components[]> {
    return this.http
    .get<Components[]>(this.url)
    .pipe();
  }
}
