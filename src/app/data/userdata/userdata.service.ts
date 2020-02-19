import { Injectable, Component } from '@angular/core';
import { Userdata } from './userdata.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = 'http://localhost:3000/userdata';

  constructor(private http: HttpClient) { }

  getUserdata(): Observable<Userdata[]> {
    return this.http
    .get<Userdata[]>(this.url)
    .pipe(map(res => res.reverse()));
  }

  addUserdataJSON(value): Observable<any> {
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.url, value, { headers: headers });
  }

  deleteUserdata(value) {
    return this.http.delete(this.url+`/${value}`)
  }
}
