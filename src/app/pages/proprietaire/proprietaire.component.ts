

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material'; 
import { Proprietaire } from 'src/app/models/Proprietaire';
import { ProprietaireService } from 'src/app/services/proprietaire.service';
import * as XLSX from 'xlsx';
import { AddProprietaireComponent } from './add-proprietaire/add-proprietaire.component';
import { UpdateProprietaireComponent } from './update-proprietaire/update-proprietaire.component';

@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styleUrls: ['./proprietaire.component.scss']
})
export class ProprietaireComponent implements OnInit {

  proprietaire: Proprietaire[];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['Action','code','nom','prenom','tel','email','login','role','statut'];

  constructor(private service: ProprietaireService,public dialog: MatDialog) { }

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
    let dialogRef = this.dialog.open(AddProprietaireComponent, {
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
    let dialogRef = this.dialog.open(UpdateProprietaireComponent, {
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
    XLSX.writeFile(workBook, 'proprietaire.xlsx');
  }

}
