import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { GuardGuard } from 'src/app/shared/guard.guard';
import { TypebienComponent } from 'src/app/pages/typebien/typebien.component';
import { ProprieteComponent } from 'src/app/pages/propriete/propriete.component';
import { ProprietaireComponent } from 'src/app/pages/proprietaire/proprietaire.component';
import { InternauteComponent } from 'src/app/pages/internaute/internaute.component';
import { ReservationComponent } from 'src/app/pages/reservation/reservation.component';
import { BienComponent } from 'src/app/pages/bien/bien.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard', component: DashboardComponent }, //, canActivate: [GuardGuard]
   
    //params
    
    { path: 'typebiens', component: TypebienComponent}, //, canActivate: [GuardGuard] 
    { path: 'proprietes', component: ProprieteComponent}, //, canActivate: [GuardGuard]
    { path: 'biens', component: BienComponent}, //, canActivate: [GuardGuard]
    { path: 'proprietaires', component: ProprietaireComponent}, //, canActivate: [GuardGuard]
    { path: 'internautes', component: InternauteComponent}, //, canActivate: [GuardGuard]
    { path: 'reservations', component: ReservationComponent}, //, canActivate: [GuardGuard]


];
