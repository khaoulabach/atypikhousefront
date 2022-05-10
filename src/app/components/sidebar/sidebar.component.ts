import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tableau de bord',  icon: 'ni-chart-pie-35 text-orange', class: '' },
  { path: '/reservations', title: 'Réservations',  icon:'ni-collection text-primary', class: '' }, 

 ];
export const PARAMS: RouteInfo[] = [
  { path: '/typebiens', title: 'Type Biens',  icon:'ni-folder-17  ', class: '' },
  { path: '/proprietes', title: 'Propriétés',  icon:'ni-ungroup  ', class: '' },
  { path: '/biens', title: 'Biens',  icon:'ni-folder-17  ', class: '' },
  { path: '/proprietaires', title: 'Propriétaires',  icon:'ni-badge ', class: '' },
  { path: '/internautes', title: 'Internautes',  icon:'ni-badge ', class: '' },
  // { path: '/users', title: 'Utilisateurs',  icon:'ni-single-02 ', class: '' }, 
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public menuItemsParam: any[];
  public menuItemsDocs: any[];
  public isCollapsed = true;
  USER;
  role;

  constructor(private router: Router,
    private dataService : DataService) { }

  ngOnInit() {
    //this.dataService.currentUser.subscribe(res => this.USER = res);
    this.USER = JSON.parse(localStorage.getItem('user'));
    //this.role = this.USER.role;
    this.role = "Admin";
     if (this.role == 'Admin') {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
      this.menuItemsParam = PARAMS.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    } else  {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    } 
    
  }
}
