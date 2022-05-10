import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ExterneLayoutComponent } from './layouts/externe-layout/externe-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { MatAutocompleteModule } from '@angular/material';
import { SignaturePadModule } from '@ng-plus/signature-pad';
import { DndDirective } from './directives/dnd.directive';
import { ProgressComponent } from './components/progress/progress.component'; 
import { AddTypebienComponent } from './pages/typebien/add-typebien/add-typebien.component';
import { UpdateTypebienComponent } from './pages/typebien/update-typebien/update-typebien.component';

import { AddProprieteComponent } from './pages/propriete/add-propriete/add-propriete.component';
import { UpdateProprieteComponent } from './pages/propriete/update-propriete/update-propriete.component';
import { AddProprietaireComponent } from './pages/proprietaire/add-proprietaire/add-proprietaire.component';
import { UpdateProprietaireComponent } from './pages/proprietaire/update-proprietaire/update-proprietaire.component';
import { UpdateInternauteComponent } from './pages/internaute/update-internaute/update-internaute.component';
import { AddInternauteComponent } from './pages/internaute/add-internaute/add-internaute.component';

@NgModule({
  imports: [
    SignaturePadModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    // ThermalPrintModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ExterneLayoutComponent,
    DndDirective,
    ProgressComponent, 
    AddTypebienComponent, UpdateTypebienComponent,
    AddProprieteComponent, UpdateProprieteComponent, 
    AddProprietaireComponent, UpdateProprietaireComponent,
    AddInternauteComponent, UpdateInternauteComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    AddTypebienComponent, UpdateTypebienComponent,
    AddProprieteComponent, UpdateProprieteComponent,
    AddProprietaireComponent, UpdateProprietaireComponent,
    AddInternauteComponent, UpdateInternauteComponent,
  ],
})
export class AppModule { }
