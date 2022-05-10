import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constantURL } from 'src/app/shared/constantURL';
import { Internaute } from '../models/Internaute';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly base_url: string = constantURL.apiEndpoint+'/api/internautes';
  constructor(private http:HttpClient) { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('login');
    localStorage.removeItem('id');
  } 
  authLogin(model): Observable<Internaute> {
    return this.http.post<Internaute>(`${this.base_url}/Login`, model, {
      headers: {
          'Content-Type': 'application/json'
      }
    });
 }
}
