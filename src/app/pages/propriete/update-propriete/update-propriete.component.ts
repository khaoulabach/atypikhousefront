import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Propriete } from 'src/app/models/Propriete';
import { ProprieteService } from 'src/app/services/propriete.service';

@Component({
  selector: 'app-update-propriete',
  templateUrl: './update-propriete.component.html',
  styleUrls: ['./update-propriete.component.scss']
})
export class UpdateProprieteComponent implements OnInit {

  propriete : Propriete;
  form : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service:ProprieteService,
    public dialogRef: MatDialogRef<UpdateProprieteComponent>,
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
      description:[this.data.element.description,Validators.required],
      indObligatoire:[this.data.element.indObligatoire,Validators.required],
      typeBienId:[this.data.element.typeBienId]
    });
  }
  onSubmit() {
    console.log(this.form.value);
    if (this.form.invalid) {
      console.log(this.form.value)
      this.toastr.error('Informations Manquantes', '');
      return;
    } 
    this.service.put(this.data.element.id,this.form.value)
      .subscribe(data => {
        this.toastr.success('Operation Réussie', 'Propriété');
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
