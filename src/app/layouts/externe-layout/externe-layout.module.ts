import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExterneLayoutRoutes } from './externe-layout.routing';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { BlogComponent } from 'src/app/pages/blog/blog.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { HebergementComponent } from 'src/app/pages/hebergement/hebergement.component';
import { ConnexionComponent } from 'src/app/pages/connexion/connexion.component';
import { DetailHebergementComponent } from 'src/app/pages/detail-hebergement/detail-hebergement.component';
import { InscriptionComponent } from 'src/app/pages/inscription/inscription.component';
import { CreateAnnonceComponent } from 'src/app/pages/create-annonce/create-annonce.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExterneLayoutRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    HebergementComponent, 
    BlogComponent, 
    ContactComponent,
    DetailHebergementComponent, 
    ConnexionComponent, 
    InscriptionComponent,
    CreateAnnonceComponent
  ]
})
export class ExterneLayoutModule { }