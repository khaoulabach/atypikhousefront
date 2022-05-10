import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { constantURL } from 'src/app/shared/constantURL';
import { Observable } from 'rxjs';
import { Typebien } from '../models/Typebien';

@Injectable({
  providedIn: 'root'
})
export class TypebienService {
  
  readonly base_url: string = constantURL.apiEndpoint+'/api/typebiens';

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
  getAll(): Observable<Typebien[]>{
    return this.http.get<Typebien[]>(`${this.base_url}`);
  }
  getById(id): Observable<Typebien[]>{
    return this.http.get<Typebien[]>(`${this.base_url}/${id}`);
  }

}
