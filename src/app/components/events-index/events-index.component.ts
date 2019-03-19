import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
// import { KidsService } from '../../services/kids.service';
import { Event } from '../../models/Event';
import { Router } from '@angular/router';
// import { Kid } from '../../models/Kid';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.css']
})
export class EventsIndexComponent implements OnInit {

  constructor(private _eventService: EventsService) { }

  ngOnInit() {
    this._eventService.getEvents().subscribe((events: Event[]) => {

    });
  }

}
