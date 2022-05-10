import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Internaute } from 'src/app/models/Internaute';
import { ReservationDto } from 'src/app/models/ReservationDto';
import { AuthService } from 'src/app/services/auth.service';
import { BienService } from 'src/app/services/bien.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { TypebienService } from 'src/app/services/typebien.service';

@Component({
  selector: 'app-detail-hebergement',
  templateUrl: './detail-hebergement.component.html',
  styleUrls: ['./detail-hebergement.component.scss']
})
export class DetailHebergementComponent implements OnInit {

  constructor(public service: BienService,
    public reservationService: ReservationService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  bien;
  idbien;
  internaute ;
  internauteId;
  
  reservation : ReservationDto;
  form : FormGroup;
  get f() { return this.form.controls; }

  createForm() {
    this.form = this.formBuilder.group({
      dateDebut: ['',Validators.required],
      dateFin: ['',Validators.required],
      bienId: [this.idbien,Validators.required],
      internauteId: [this.internauteId,Validators.required]
      // typeBienId:[''],
    });
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.idbien = Number.parseInt( param.id);
      // console.log(this.idbien);
    })
    this.service.getById(this.idbien).subscribe(res => {
      this.bien = res;
      // console.log(this.bien);
    });
    this.internauteId = Number.parseInt( localStorage.getItem('id'));
    this.internaute = localStorage.getItem('login');
    console.log(this.internauteId);
    console.log(this.internaute);

    this.createForm();
  }

  async getAsyncData() {
    // this.bien = await this.service.getById(this.idbien).toPromise();
    // console.log(this.bien);
    // this.dataSource.filterPredicate = (data:any,filter:string)=> data['personnel'].toLowerCase().indexOf(filter)!=-1;
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log(this.form.value)
      this.toastr.error('Informations Manquantes', '');
      return;
    }
    // this.internauteId = 1;
    this.reservation = new ReservationDto(this.form.value.dateDebut,this.form.value.dateFin,this.idbien,this.internauteId);

      console.log(this.reservation);
    
    this.reservationService.post(this.reservation)
      .subscribe(data => {
        alert('Operation Réussie')
        this.toastr.success('Operation Réussie', 'Reservation');
    },
    err => {
      console.log(err);
    });
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }
}
