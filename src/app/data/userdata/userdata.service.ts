import { Injectable, Component } from '@angular/core';
import { Userdata } from './userdata.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = 'https://dennisnowicki.github.io/frontEndEP/src/assets/data/userdata.json';

  constructor(private http: HttpClient) { }

  getUserdata(): Observable<Userdata[]> {
    return this.http
    .get<Userdata[]>(this.url)
    .pipe(map(res => res.reverse["userdata"]));
  }
}
