import { Injectable, Component } from '@angular/core';
import { Components } from './components.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  url = 'http://localhost:3000/components';
  urllocal = 'http://localhost:4000/chosenComponents';

  constructor(private http: HttpClient) { }

  getComponents(): Observable<Components[]> {
    return this.http
    .get<Components[]>(this.url)
    .pipe();
  }

  addComponent(value): Observable<any[]> {
    return this.http.get<any[]>(value).pipe();

  }

  addComponentJSON(value): Observable<any> {
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.urllocal, value, { headers: headers })
  }
}
