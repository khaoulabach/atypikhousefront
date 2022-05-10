import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Internaute } from 'src/app/models/Internaute';
import { AuthService } from 'src/app/services/auth.service';
import { InternauteService } from 'src/app/services/internaute.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  form: FormGroup;
  
  internaute ;
  internauteId;
  constructor(private authService: AuthService,
    private router: Router,
    public service: InternauteService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService ) { }

  ngOnInit() {
    this.internauteId = Number.parseInt( localStorage.getItem('id'));
    this.internaute = localStorage.getItwem('login');
    console.log(this.internauteId);
    console.log(this.internaute);

    this.createForm();
  }
  
  get f() { return this.form.controls; }
  
  createForm() {
    this.form = this.formBuilder.group({ 
      id:[''],
      code:[''],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      tel:[''],
      email:[''],
      role:[''],
      login:['',Validators.required],
      password:['',Validators.required]
    });
  }
  onSubmit() { 
    console.log(this.form.value)

    if (this.form.invalid) {
      console.log(this.form.value)
      this.toastr.error('Informations Manquantes', '');
      return;
    }
    this.internaute = new Internaute(this.form.value.code,this.form.value.nom,
      this.form.value.prenom,this.form.value.tel,
      this.form.value.email,this.form.value.login,
      this.form.value.password,this.form.value.role);
    
    this.service.post(this.internaute)
      .subscribe(data => {
        this.toastr.success('Operation Réussie', 'Internaute');
    },
    err => {
      console.log(err);
    });
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }

}
