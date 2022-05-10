import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 
import * as internal from 'assert';
import { Internaute } from 'src/app/models/Internaute';
import { InternauteService } from 'src/app/services/internaute.service';

@Component({
  selector: 'app-add-internaute',
  templateUrl: './add-internaute.component.html',
  styleUrls: ['./add-internaute.component.scss']
})
export class AddInternauteComponent implements OnInit {

  internaute : Internaute;
  form : FormGroup;
 

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service:InternauteService,
    public dialogRef: MatDialogRef<AddInternauteComponent>) { }
  
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
    this.internaute = new Internaute(this.form.value.code,this.form.value.nom,
      this.form.value.prenom,this.form.value.tel,
      this.form.value.email,this.form.value.login,
      this.form.value.password,this.form.value.role);
    
    this.service.post(this.internaute)
      .subscribe(data => {
        this.toastr.success('Operation Réussie', 'Internaute');
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
