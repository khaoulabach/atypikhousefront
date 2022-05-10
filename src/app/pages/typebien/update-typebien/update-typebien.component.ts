import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Typebien } from 'src/app/models/Typebien';
import { TypebienService } from 'src/app/services/typebien.service';

@Component({
  selector: 'app-update-typebien',
  templateUrl: './update-typebien.component.html',
  styleUrls: ['./update-typebien.component.scss']
})
export class UpdateTypebienComponent implements OnInit {

  typebien : Typebien;
  form : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service:TypebienService,
    public dialogRef: MatDialogRef<UpdateTypebienComponent>,
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
      description:[this.data.element.description,Validators.required],
      descriptionAbrege:[this.data.element.descriptionAbrege,Validators.required],
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
        this.toastr.success('Operation Réussie', 'TypeBien');
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
