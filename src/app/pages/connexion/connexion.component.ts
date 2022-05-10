import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InternauteService } from 'src/app/services/internaute.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthService
    ) {}

  interval :any;
  loginForm: FormGroup;
  message: string;
  // users:User;
  etat :boolean= false;
  role;
  // USER : User ;
  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms));
  }

  get f() { return this.loginForm.controls; }

  internaute ;
  internauteId;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Login: ['', Validators.required],
      Password: ['', Validators.required]
    });
    this.internauteId = Number.parseInt( localStorage.getItem('id'));
    this.internaute = localStorage.getItem('login');
    console.log(this.internauteId);
    console.log(this.internaute);
  }
  ngOnDestroy() {
  }
  
  OnSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    else{
      if(this.f.Login.value =="admin" || this.f.Login.value=="Admin"){
        this.role="Admin";
        this.router.navigate(["/dashboard"]);
      }
      this.verify(); 
      this.delay(2000).then(any=>{ 
        if(this.etat == true) {
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', this.f.Login.value);
          // this.dataService.changeUser(this.USER);
          this.router.navigate(["/home"]); 
        } else {
          this.message = "Login ou mot de passe incorrect !";
        }
     });
    } 
  }  
  verify() : any {
    this.authService.authLogin(this.loginForm.value).subscribe(
      data => {
        if(data){
          this.etat=true ; 
          console.log(data)
          localStorage.setItem('id', data.id.toString());
          localStorage.setItem('login', data.login);

          localStorage.setItem('user', JSON.stringify(data));
        }    
        else
          this.etat= false; 
      },
      (error) => {
        console.log("erreur");
      }
    );
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }
}
