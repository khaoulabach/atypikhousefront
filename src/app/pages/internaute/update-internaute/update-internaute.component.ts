import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Internaute } from 'src/app/models/Internaute';
import { InternauteService } from 'src/app/services/internaute.service';

@Component({
  selector: 'app-update-internaute',
  templateUrl: './update-internaute.component.html',
  styleUrls: ['./update-internaute.component.scss']
})
export class UpdateInternauteComponent implements OnInit {
 
  internaute : Internaute;
  form : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service:InternauteService,
    public dialogRef: MatDialogRef<UpdateInternauteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  
  get f() { return this.form.controls; }
   
  ngOnInit() { 
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
    if (this.form.invalid) {
      console.log(this.form.value)
      this.toastr.error('Informations Manquantes', '');
      return;
    } 
    this.service.put(this.data.element.id,this.form.value)
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
