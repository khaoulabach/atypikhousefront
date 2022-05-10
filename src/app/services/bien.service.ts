import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { constantURL } from 'src/app/shared/constantURL';
import { Observable } from 'rxjs';
import { Typebien } from '../models/Typebien';
import { Bien } from '../models/Bien';

@Injectable({
  providedIn: 'root'
})
export class BienService {
  
  readonly base_url: string = constantURL.apiEndpoint+'/api/biens';

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
  getAll(): Observable<Bien[]>{
    return this.http.get<Bien[]>(`${this.base_url}`);
  }
  getAllSelect(): Observable<Bien[]>{
    return this.http.get<Bien[]>(`${this.base_url}/select`);
  }
  getById(id): Observable<Bien[]>{
    return this.http.get<Bien[]>(`${this.base_url}/${id}`);
  }
  rechercher(data): Observable<Bien[]> {
    return this.http.post<Bien[]>(`${this.base_url}/rechercher`, data);
  }

}
