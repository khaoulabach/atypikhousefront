import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard   {

  constructor(private _router : Router) { }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url; 
    //console.log(url)
    return this.isLoggedIn(url);
  }
  isLoggedIn(url) : boolean{
    if(localStorage.getItem('isLoggedIn') == "true"){      
      return true;
    }
    return false; 
  }
}
