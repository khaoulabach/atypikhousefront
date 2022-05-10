import { Routes } from '@angular/router';
import { BlogComponent } from 'src/app/pages/blog/blog.component';
import { ConnexionComponent } from 'src/app/pages/connexion/connexion.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { CreateAnnonceComponent } from 'src/app/pages/create-annonce/create-annonce.component';
import { DetailHebergementComponent } from 'src/app/pages/detail-hebergement/detail-hebergement.component';
import { HebergementComponent } from 'src/app/pages/hebergement/hebergement.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { InscriptionComponent } from 'src/app/pages/inscription/inscription.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
// import { LoginComponent } from '../../pages/login/login.component';
// import { RegisterComponent } from '../../pages/register/register.component';

export const ExterneLayoutRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'hebergement', component: HebergementComponent },
    { path: 'hebergementdetail/:id', component: DetailHebergementComponent },
    { path: 'createAnnonce', component: CreateAnnonceComponent },
];
