import { Component, OnInit } from '@angular/core';
import { KidsService } from '../../../services/kids.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-kid-create',
  templateUrl: './kid-create.component.html',
  styleUrls: ['./kid-create.component.css']
})

export class KidCreateComponent implements OnInit {

  kidForm: FormGroup;


  constructor(private _kidService: KidsService, private _form: FormBuilder, private _router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.kidForm = this._form.group({
      FName: new FormControl,
      LName: new FormControl,
      Gender: new FormControl,
      DOB: new FormControl,
      About: new FormControl

    })
  }

  onSubmit() {
    this._kidService.createKid(this.kidForm.value).subscribe(data => {
      this._router.navigate(['/home']);
    });
  }

}
