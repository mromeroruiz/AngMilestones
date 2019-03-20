import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { Event } from '../../../models/Event';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  editEventForm: FormGroup;
  event: Event;

  constructor(private _eventService: EventsService, private _form: FormBuilder, private _ar: ActivatedRoute, private _router: Router) { 

    this._ar.paramMap.subscribe(p => {
      this._eventService.getEvent(p.get('id')).subscribe((singleEvent: Event) => {
         this.event = singleEvent;
         this.createForm();
      });
    });
  }


  ngOnInit() { }

  createForm(){
    this.editEventForm = this._form.group({
      EventName: new FormControl(this.event.EventName),
      DateOfEvent: new FormControl(this.event.DateOfEvent),
      EventLocation: new FormControl(this.event.EventLocation),
      EventComment: new FormControl(this.event.EventComment),
      EventID: new FormControl(this.event.EventID,),
      FirstName: new FormControl(this.event.FirstName),
      LastName: new FormControl(this.event.LastName),
      KidAgeAtEvent: new FormControl(this.event.KidAgeAtEvent),
      KidID: new FormControl(this.event.KidID)

    });
  }

  
  onSubmit(form){
    const editEvent: Event = {
      EventID: form.value.EventID,
      EventName: form.value.EventName,
      DateOfEvent: form.value.DateOfEvent,
      EventLocation: form.value.EventLocation,
      EventComment: form.value.EventComment,
      KidID: form.value.KidID,
      FirstName: form.value.FirstName,
      LastName: form.value.LastName,
      KidAgeAtEvent: form.value.KidAgeAtEvent,
      Gender: form.value.Gender
    };
    this._eventService.putEvent(editEvent).subscribe(d => {
      this._router.navigate(['/events']);
    });
  }



}