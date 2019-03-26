import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  event: Event;

  constructor(private _activatedRoute: ActivatedRoute, private _eventService: EventsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._eventService.getEvent(routeData.get('id')).subscribe((singleEvent: Event) => {
        this.event = singleEvent;
      });
    });
  }

}
