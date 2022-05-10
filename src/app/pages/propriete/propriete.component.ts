import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material'; 
import { Propriete } from 'src/app/models/Propriete';
import { ProprieteService } from 'src/app/services/propriete.service';
import * as XLSX from 'xlsx';
import { AddProprieteComponent } from './add-propriete/add-propriete.component';
import { UpdateProprieteComponent } from './update-propriete/update-propriete.component'; 

@Component({
  selector: 'app-propriete',
  templateUrl: './propriete.component.html',
  styleUrls: ['./propriete.component.scss']
})
export class ProprieteComponent implements OnInit {

  proprietes: Propriete[];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['Action','code','description'];

  constructor(private service: ProprieteService,public dialog: MatDialog) { }

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
    let dialogRef = this.dialog.open(AddProprieteComponent, {
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
    let dialogRef = this.dialog.open(UpdateProprieteComponent, {
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
    XLSX.writeFile(workBook, 'proprietes.xlsx');
  }

}
