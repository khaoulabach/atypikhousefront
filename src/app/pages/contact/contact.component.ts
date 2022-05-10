import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  internaute ;
  internauteId;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.internauteId = Number.parseInt( localStorage.getItem('id'));
    this.internaute = localStorage.getItem('login');
    console.log(this.internauteId);
    console.log(this.internaute);
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }

}
