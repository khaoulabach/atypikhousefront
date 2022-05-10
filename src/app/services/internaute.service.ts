import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { constantURL } from 'src/app/shared/constantURL';
import { Observable } from 'rxjs';
import { Internaute } from '../models/Internaute';

@Injectable({
  providedIn: 'root'
})
export class InternauteService {
  
  readonly base_url: string = constantURL.apiEndpoint+'/api/internautes';

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
  getAll(): Observable<Internaute[]>{
    return this.http.get<Internaute[]>(`${this.base_url}`);
  }
  getAllSelect(): Observable<Internaute[]>{
    return this.http.get<Internaute[]>(`${this.base_url}/select`);
  }

}
