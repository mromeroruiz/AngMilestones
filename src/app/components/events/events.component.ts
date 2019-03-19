import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private _eventService: EventsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.eventForm = this._form.group({
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
