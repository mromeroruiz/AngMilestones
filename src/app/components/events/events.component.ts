import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EventsService } from '../../services/events.service';
import { KidsService } from '../../services/kids.service';
import { Router } from '@angular/router';
import { Kid } from '../../models/Kid';

export interface Kid {
  FName: string;
  LName: string;
}
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventForm: FormGroup;
  kids: Kid[];


  constructor(private _eventService: EventsService, private _kidService: KidsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
    this._kidService.getKids().subscribe((kids: Kid[])=> this.kids = kids)
  }

  createForm() {
    this.eventForm = this._form.group({
      KidID: new FormControl,
      EventName: new FormControl,
      EventLocation:  new FormControl,
      DateOfEvent: new FormControl,
      EventComment: new FormControl
    })
  }

  onSubmit() {
    this._eventService.postEvent(this.eventForm.value).subscribe(data => {
      this._router.navigate(['/events']);
    });
  }

}
