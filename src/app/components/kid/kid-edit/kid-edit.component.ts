import { Component, OnInit } from '@angular/core';
import { Kid } from 'src/app/models/Kid';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { KidsService } from 'src/app/services/kids.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kid-edit',
  templateUrl: './kid-edit.component.html',
  styleUrls: ['./kid-edit.component.css']
})
export class KidEditComponent implements OnInit {

  kid: Kid;

  editKidForm: FormGroup;

  constructor(private _form: FormBuilder,
              private _kidService: KidsService,
              private _ar: ActivatedRoute,
              private _router: Router) { 

                this._ar.paramMap.subscribe(p => {
                  this._kidService.getKid(p.get('id')).subscribe((singleKid: Kid) => {
                    this.kid = singleKid;
                    this.createForm();
                  });
                });
              }

  ngOnInit() {
  }
  
  createForm() {
    this.editKidForm = this._form.group({
      KidID: new FormControl(this.kid.KidID),
      FName: new FormControl(this.kid.FName),
      LName: new FormControl(this.kid.LName),
      Gender: new FormControl(this.kid.Gender),
      DOB: new FormControl(this.kid.DOB),
      Age: new FormControl(this.kid.Age),
      About: new FormControl(this.kid.About),
      
    });
  }

  onSubmit(form) {
    const updateKid: Kid = {
      KidID: form.value.KidID,
      FName: form.value.FName,
      LName: form.value.LName,
      Gender: form.value.Gender,
      DOB: form.value.DOB,
      Age: form.value.Age,
      About: form.value.About

    };
    this._kidService.updateKid(updateKid).subscribe(d => {
      this._router.navigate(['/home']);
    });
  }
}
