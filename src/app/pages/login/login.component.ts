import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor( private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    public authService: AuthService,
    public service: UserService) {}

  interval :any;
  loginForm: FormGroup;
  message: string;
  users:User;
  etat :boolean= false;
  USER : User ;
  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms));
  }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Login: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  ngOnDestroy() {
  }
  
  OnSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    else{
      this.verify(); 
      this.delay(2000).then(any=>{ 
        if(this.etat == true) {
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', this.f.Login.value);
          // this.dataService.changeUser(this.USER);
          localStorage.setItem('visiteur', "false");
          //this.router.navigate(["/dashboard"]);
          switch (this.USER.role) {
            case "Admin": this.router.navigate(["/dashboard"]); break;
            case "Direction": { localStorage.setItem('visiteur', "true"); this.router.navigate(["/dashboard"]); break;}
            case "Superviseur": this.router.navigate(["/dashboard"]); break;
            case "Ads": this.router.navigate(["/dashboard"]); break;
            case "Agent": this.router.navigate(["/dashboard"]); break;
            default:
              this.router.navigate(["/login"]); break;
          }
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
          localStorage.setItem('user', JSON.stringify(data));
          // this.USER =  data;
        }    
        else
          this.etat= false; 
      },
      (error) => {
        console.log("erreur");
      }
    );
  }
}
