import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BienService } from 'src/app/services/bien.service';
import { TypebienService } from 'src/app/services/typebien.service';

@Component({
  selector: 'app-detail-hebergement',
  templateUrl: './detail-hebergement.component.html',
  styleUrls: ['./detail-hebergement.component.scss']
})
export class DetailHebergementComponent implements OnInit {

  constructor(public service: BienService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,) { }

  idbien;
  bien;
  form: FormGroup;

  get f() { return this.form.controls; }

  createForm() {
    this.form = this.formBuilder.group({
      dateArrive: [''],
      dateDepart: [''],
      nbrPersonne: [1],
      // typeBienId:[''],
    });
  }
  ngOnInit() {
    this.createForm();
    this.activatedRoute.params.subscribe(param => {
      this.idbien = param.id;
      console.log(this.idbien);
    })
    this.service.getById(this.idbien).subscribe(res => {
      this.bien = res;
      console.log(this.bien);
    });
  }

  async getAsyncData() {
    // this.bien = await this.service.getById(this.idbien).toPromise();
    // console.log(this.bien);
    // this.dataSource.filterPredicate = (data:any,filter:string)=> data['personnel'].toLowerCase().indexOf(filter)!=-1;
  }

  onSubmit() {
    console.log(this.form.value);
    
  }

}
