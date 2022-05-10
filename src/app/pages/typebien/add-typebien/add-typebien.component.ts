import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Typebien } from 'src/app/models/Typebien';
import { TypebienService } from 'src/app/services/typebien.service';

@Component({
  selector: 'app-add-typebien',
  templateUrl: './add-typebien.component.html',
  styleUrls: ['./add-typebien.component.scss']
})
export class AddTypebienComponent implements OnInit {

  typeBien : Typebien;
  form : FormGroup;
 

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service:TypebienService,
    public dialogRef: MatDialogRef<AddTypebienComponent>) { }
  
  ngOnInit() {
    //this.getAsyncData();
    //this.createFormControls();
    this.createForm();
  }
  get f() { return this.form.controls; }
 
  createForm() {
    this.form = this.formBuilder.group({ 
      id:[''],
      description:['',Validators.required],
      descriptionAbrege:['',Validators.required]
    });
  }
  onSubmit() { 
    if (this.form.invalid) {
      console.log(this.form.value)
      this.toastr.error('Informations Manquantes', '');
      return;
    }
    this.typeBien = new Typebien(this.form.value.description,this.form.value.descriptionAbrege);
    
    this.service.post(this.typeBien)
      .subscribe(data => {
        this.toastr.success('Operation Réussie', 'Type bien');
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
