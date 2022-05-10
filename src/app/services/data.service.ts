import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private IdPersonne = new BehaviorSubject<number>(-1);
  currentIdPersonne = this.IdPersonne.asObservable();
  private User = new BehaviorSubject<User>(null);
  currentUser = this.User.asObservable();
  
  
  changeIdPersonne(id: number) {
    this.IdPersonne.next(id);
  }
  changeUser(p: User) {
    this.User.next(p);
  }
  

  constructor() { }
}
