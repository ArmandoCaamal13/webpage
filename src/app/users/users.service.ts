import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  // login(user: any): Observable<any> {
  //   return this.http.post("//localhost:/testsm41", user);
  // }
  // register(user: any): Observable<any> {
  //   return this.http.post("", user);
  // }

}
