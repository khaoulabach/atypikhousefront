import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Propriete } from 'src/app/models/Propriete';
import { RechercheBien } from 'src/app/models/RechercheBien';
import { AuthService } from 'src/app/services/auth.service';
import { BienService } from 'src/app/services/bien.service';
import { TypebienService } from 'src/app/services/typebien.service';

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.scss']
})
export class HebergementComponent implements OnInit {

  constructor(public typeBienService: TypebienService,
    public service: BienService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router) { }

  typeBiens = [];
  biens = [];
  rechercheBien;
  form: FormGroup;

  internaute ;
  internauteId;
  ngOnInit() {
    
    this.internauteId = Number.parseInt( localStorage.getItem('id'));
    this.internaute = localStorage.getItem('login');
    console.log(this.internauteId);
    console.log(this.internaute);
    this.createForm();
    this.getAsyncData();
  }

  get f() { return this.form.controls; }

  createForm() {
    this.form = this.formBuilder.group({
      prixMin: [],
      prixMax: [],
      type: [''],
      // typeBienId:[''],
    });
  }

  async getAsyncData() {
    this.biens = await this.service.getAll().toPromise();
    this.typeBiens = await this.typeBienService.getAll().toPromise();
    console.log(this.biens);
    // this.dataSource.filterPredicate = (data:any,filter:string)=> data['personnel'].toLowerCase().indexOf(filter)!=-1;
  }

  onSubmit() {
    console.log(this.form.value);
    this.rechercheBien = new RechercheBien(this.form.value.prixMin, this.form.value.prixMax, this.form.value.type);
    this.service.rechercher(this.rechercheBien).subscribe(data => {
      console.log(data);
      this.biens = data;
    }, err => {
      console.log(err);
    });
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }
}
