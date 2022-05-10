import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES, PARAMS } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public listParams: any[];
  public location: Location;
  userName;
  role;
  USER;

  constructor(location: Location,  
    private element: ElementRef, 
    private router: Router,
    private dataService : DataService,
    private authService: AuthService) {
    this.location = location;
  }

  ngOnInit() {
    this.USER = JSON.parse(localStorage.getItem('user'));
    //console.log(this.USER);
    //this.userName = localStorage.getItem('userName');
    //this.userRole = localStorage.getItem('role');
    //this.userName = this.USER.fullName;
    this.userName = "Admin";
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.listParams = PARAMS.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    for(var item = 0; item < this.listParams.length; item++){
      if(this.listParams[item].path === titlee){
            return this.listParams[item].title;  
      }
    }
    return '';
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
