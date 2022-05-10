import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Typebien } from 'src/app/models/Typebien';
import { TypebienService } from 'src/app/services/typebien.service';
import * as XLSX from 'xlsx';
import { AddTypebienComponent } from './add-typebien/add-typebien.component';
import { UpdateTypebienComponent } from './update-typebien/update-typebien.component';

@Component({
  selector: 'app-typebien',
  templateUrl: './typebien.component.html',
  styleUrls: ['./typebien.component.scss']
})
export class TypebienComponent implements OnInit {
  typebien: Typebien[];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['Action','description','descriptionAbrege'];

  constructor(private service: TypebienService,public dialog: MatDialog) { }

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
    let dialogRef = this.dialog.open(AddTypebienComponent, {
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
    let dialogRef = this.dialog.open(UpdateTypebienComponent, {
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
    XLSX.writeFile(workBook, 'typebien.xlsx');
  }



}
