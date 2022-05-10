import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { MatTableDataSource } from '@angular/material';
import { ChartService } from 'src/app/services/chart.service';
import { constants } from 'src/app/shared/constants'; 
import { constantURL } from 'src/app/shared/constantURL'; 
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver'; 
import { AutofillMonitor } from '@angular/cdk/text-field';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 

  public canvas : any;
  public ctx;

  
  USER;
  humains: any;
  nbrVisiteursEntrant=0; nbrVisiteursSortant=0;
  nbrPropreEntrant=0; nbrPropreSortant=0;
  nbrSousTraitantEntrant=0; nbrSousTraitantSortant=0;
  nbrStagiairesEntrant=0; nbrStagiairesSortant=0;
 
  nbrTransportsEntrant=0; nbrTransportsSortant=0;
  nbrVehiculesEntrant=0; nbrVehiculesSortant=0;
  nbrControleCimentEntrant=0; nbrControleCimentSortant=0;
  nbrControleMPEntrant=0; nbrControleMPSortant=0;
  
  

  
  constructor(private chartService: ChartService) { }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms));
  }
  ngOnInit() {
    //this.dataService.currentUser.subscribe(res => this.USER = res);
    this.USER = JSON.parse(localStorage.getItem('user'));
  }
  


}
