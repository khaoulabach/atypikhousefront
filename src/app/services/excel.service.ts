import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { constantURL } from 'src/app/shared/constantURL'; 

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  readonly base_url: string = constantURL.apiEndpoint+'/api/Excel'; 
  constructor(private http:HttpClient) { }
 
  getObservationsExcel(date) {
    return this.http.get(`${this.base_url}/ExportObservations/${date.startDate}/${date.endDate}`, {responseType: 'blob'});
  } 
  // getReceptionExcel(date) {
  //   return this.http.get(`${api}excel/exportReceptions/${date.startDate}/${date.endDate}`, {responseType: 'blob'});
  // }

  // getLivraisonMouvementExcel(code,date) {
  //     return this.http.get(`${api}excel/exportMouvementLivraisons/${date.startDate}/${date.endDate}/${code}`, {responseType: 'blob'});
  // }

  // getReceptionMouvementExcel(code,date) {
  //   // return this.http.get(`${api}excel/exportMouvementReceptions/${date.startDate}/${date.endDate}/${code}`, {responseType: 'blob'});
  //   return this.http.get(`${api}excel/exportMouvementReceptions/${date.startDate}/${date.endDate}/${code}`, {responseType: 'blob'});
  // }
}
