import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { constantURL } from 'src/app/shared/constantURL';
import { Observable } from 'rxjs'; 
import { Reservation } from '../models/Reservation';
import { ReservationAdmin } from '../models/ReservationAdmin';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  
  readonly base_url: string = constantURL.apiEndpoint+'/api/Reservations';

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
  getAll(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${this.base_url}`);
  }
  getAllSelect(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${this.base_url}/select`);
  }
  
  getAllSelectAdmin(): Observable<ReservationAdmin[]>{
    return this.http.get<ReservationAdmin[]>(`${this.base_url}/admin`);
  }

}
