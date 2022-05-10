import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Propriete } from 'src/app/models/Propriete';
import { ProprieteService } from 'src/app/services/propriete.service';

@Component({
  selector: 'app-add-propriete',
  templateUrl: './add-propriete.component.html',
  styleUrls: ['./add-propriete.component.scss']
})
export class AddProprieteComponent implements OnInit {

 
  propriete : Propriete;
  form : FormGroup;
 

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service:ProprieteService,
    public dialogRef: MatDialogRef<AddProprieteComponent>) { }
  
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
      description:['',Validators.required],
      indObligatoire:['',Validators.required],
      typeBienId:[''],
    });
  }
  onSubmit() { 
    if (this.form.invalid) {
      console.log(this.form.value)
      this.toastr.error('Informations Manquantes', '');
      return;
    }
    this.propriete = new Propriete(this.form.value.code,
      this.form.value.description,
      this.form.value.indObligatoire,
      this.form.value.typeBienId);
    
    this.service.post(this.propriete)
      .subscribe(data => {
        this.toastr.success('Operation Réussie', 'Propriete');
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
