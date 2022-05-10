import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Proprietaire } from 'src/app/models/Proprietaire';
import { ProprietaireService } from 'src/app/services/proprietaire.service';

@Component({
  selector: 'app-add-proprietaire',
  templateUrl: './add-proprietaire.component.html',
  styleUrls: ['./add-proprietaire.component.scss']
})
export class AddProprietaireComponent implements OnInit {

  proprietaire : Proprietaire;
  form : FormGroup;
 

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service:ProprietaireService,
    public dialogRef: MatDialogRef<AddProprietaireComponent>) { }
  
  ngOnInit() {
    //this.getAsyncData();
    //this.createFormControls();
    this.createForm();
  }
  get f() { return this.form.controls; }
 
  createForm() {
    this.form = this.formBuilder.group({ 
      id:[''],
      code:['',Validators.required],
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
    if (this.form.invalid) {
      console.log(this.form.value)
      this.toastr.error('Informations Manquantes', '');
      return;
    }
    this.proprietaire = new Proprietaire(this.form.value.code,this.form.value.nom,
      this.form.value.prenom,this.form.value.tel,
      this.form.value.email,this.form.value.login,
      this.form.value.password,this.form.value.role);
    
    this.service.post(this.proprietaire)
      .subscribe(data => {
        this.toastr.success('Operation Réussie', 'Proprietaire');
        this.onExit();
    },
    err => {
      console.log(err);
    });
  }
  onExit(): void {
    this.dialogRef.close();
  }

}
