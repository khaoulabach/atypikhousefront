import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProprietaireService } from 'src/app/services/proprietaire.service';
import { Proprietaire } from 'src/app/models/Proprietaire';

@Component({
  selector: 'app-update-proprietaire',
  templateUrl: './update-proprietaire.component.html',
  styleUrls: ['./update-proprietaire.component.scss']
})
export class UpdateProprietaireComponent implements OnInit {

  proprietaire : Proprietaire;
  form : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service:ProprietaireService,
    public dialogRef: MatDialogRef<UpdateProprietaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  
  get f() { return this.form.controls; }
   
  ngOnInit() {
    //this.getAsyncData();
    //this.createFormControls();
    this.createForm();
  }
  createForm(){
    this.form = this.formBuilder.group({ 
      id:[this.data.element.id],
      code:[this.data.element.code,Validators.required],
      nom:[this.data.element.nom,Validators.required],
      prenom:[this.data.element.prenom,Validators.required],
      tel:[this.data.element.tel], 
      email:[this.data.element.email], 
      role:[this.data.element.role],  
      login:[this.data.element.login,Validators.required],
      password:[this.data.element.password,Validators.required]
    });
  }
  onSubmit() {
    console.log(this.form.value);
    //this.submitted = true;
    if (this.form.invalid) {
      console.log(this.form.value)
      this.toastr.error('Informations Manquantes', '');
      return;
    } 
    this.service.put(this.data.element.id,this.form.value)
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
