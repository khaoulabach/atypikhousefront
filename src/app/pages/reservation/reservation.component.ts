import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material'; 
import { ReservationAdmin } from 'src/app/models/ReservationAdmin';
import { ReservationService } from 'src/app/services/reservation.service';
import * as XLSX from 'xlsx';  

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  
  reservationAdmin: ReservationAdmin[];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['Action','statut','dateDebut','dateFin','bien','internaute'];

  constructor(private service: ReservationService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getAsyncData();
  }
  async getAsyncData() {
    let data = await this.service.getAllSelectAdmin().toPromise();
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(data);
  } 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  exportExcel(): void 
  {
    const workSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
    XLSX.writeFile(workBook, 'reservation.xlsx');
  }

}
