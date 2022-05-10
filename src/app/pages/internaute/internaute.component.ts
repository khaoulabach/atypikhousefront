import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material'; 
import { Internaute } from 'src/app/models/Internaute';
import { InternauteService } from 'src/app/services/internaute.service';
import * as XLSX from 'xlsx'; 
import { AddInternauteComponent } from './add-internaute/add-internaute.component';
import { UpdateInternauteComponent } from './update-internaute/update-internaute.component';
@Component({
  selector: 'app-internaute',
  templateUrl: './internaute.component.html',
  styleUrls: ['./internaute.component.scss']
})
export class InternauteComponent implements OnInit {

  internaute: Internaute[];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['Action','code','nom','prenom','tel','email','login','role','statut'];

  constructor(private service: InternauteService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getAsyncData();
  }
  async getAsyncData() {
    let data = await this.service.getAll().toPromise();
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(data);
  }
  openAddDialog(): void {
    let dialogRef = this.dialog.open(AddInternauteComponent, {
      width: '800px',
      autoFocus: false,
      maxHeight: '100vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAsyncData();
    });
  }
  openUpdateDialog(element): void {
    let dialogRef = this.dialog.open(UpdateInternauteComponent, {
      width: '800px',
      autoFocus: false,
      maxHeight: '100vh',
      data: { element }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAsyncData();
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  exportExcel(): void 
  {
    const workSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
    XLSX.writeFile(workBook, 'internautes.xlsx');
  }


}
