import { Injectable, Component } from '@angular/core';
import { Components } from './components.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  url = 'https://dennisnowicki.github.io/frontEndEP/src/assets/data/components.json';

  constructor(private http: HttpClient) { }

  getComponents(): Observable<Components[]> {
    return this.http
    .get<Components[]>(this.url)
    .pipe(map(res => res["components"]));
  }
}
