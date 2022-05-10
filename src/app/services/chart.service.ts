import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constantURL } from '../shared/constantURL';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  
  readonly base_url: string = constantURL.apiEndpoint+'/api/Charts';

  constructor(private http: HttpClient) { }

  //
  


}
