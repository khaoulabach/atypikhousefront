import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { constantURL } from '../shared/constantURL';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  readonly base_url: string = constantURL.apiEndpoint+'/api/Users';

  constructor(private http: HttpClient) { }

  post(data) {
    return this.http.post(`${this.base_url}`, data);
  }
  put(id,data) {
    return this.http.put(`${this.base_url}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.base_url}/${id}`);
  }
  getAll(): Observable<User[]>{
    return this.http.get<User[]>(`${this.base_url}`);
  }
}
