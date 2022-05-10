import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { constantURL } from 'src/app/shared/constantURL';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly base_url: string = constantURL.apiEndpoint+'/api/Users';
  constructor(private http:HttpClient) { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('visiteur');
  } 
  authLogin(model): Observable<User> {
    return this.http.post<User>(`${this.base_url}/Login`, model, {
      headers: {
          'Content-Type': 'application/json'
      }
    });
 }
}
