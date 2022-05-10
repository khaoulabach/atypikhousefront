import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { constantURL } from 'src/app/shared/constantURL';
import { Observable } from 'rxjs';
import { Proprietaire } from '../models/Proprietaire';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {
  
  readonly base_url: string = constantURL.apiEndpoint+'/api/proprietaires';

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
  getAll(): Observable<Proprietaire[]>{
    return this.http.get<Proprietaire[]>(`${this.base_url}`);
  }
  getAllSelect(): Observable<Proprietaire[]>{
    return this.http.get<Proprietaire[]>(`${this.base_url}/select`);
  }

}
