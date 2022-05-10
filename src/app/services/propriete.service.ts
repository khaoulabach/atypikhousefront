import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { constantURL } from 'src/app/shared/constantURL';
import { Observable } from 'rxjs';
import { Propriete } from '../models/Propriete';

@Injectable({
  providedIn: 'root'
})
export class ProprieteService {
  
  readonly base_url: string = constantURL.apiEndpoint+'/api/proprietes';

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
  getAll(): Observable<Propriete[]>{
    return this.http.get<Propriete[]>(`${this.base_url}`);
  }
  getAllSelect(): Observable<Propriete[]>{
    return this.http.get<Propriete[]>(`${this.base_url}/select`);
  }

}
