import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../../../models/Event';

@Component({
  selector: 'app-events-delete',
  templateUrl: './events-delete.component.html',
  styleUrls: ['./events-delete.component.css']
})
export class EventsDeleteComponent implements OnInit {

event: Event;

  constructor(private _eventService: EventsService, private _ar: ActivatedRoute, private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._eventService.getEvent(p.get('id')).subscribe((singleEvent: Event) => {
        this.event = singleEvent;
      });
    });
  }

  onDelete(){
    this._eventService.deleteEvent(this.event.EventID).subscribe(() => {
      this._router.navigate(['/events']);
    });
  }

  ngOnInit() {
  }

}
