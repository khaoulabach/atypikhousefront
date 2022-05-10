import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatDatepickerModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { MaterialModule } from 'src/app/material/material.module';
import { TypebienComponent } from 'src/app/pages/typebien/typebien.component';
import { ProprieteComponent } from 'src/app/pages/propriete/propriete.component';
import { ProprietaireComponent } from 'src/app/pages/proprietaire/proprietaire.component';
import { InternauteComponent } from 'src/app/pages/internaute/internaute.component';
import { ReservationComponent } from 'src/app/pages/reservation/reservation.component';
import { BienComponent } from 'src/app/pages/bien/bien.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatAutocompleteModule,
  ],
  declarations: [
    DashboardComponent,
    TablesComponent,
    TypebienComponent,
    ProprieteComponent,
    ProprietaireComponent, 
    InternauteComponent,
    ReservationComponent, 
    BienComponent,
  ]
})

export class AdminLayoutModule { }
