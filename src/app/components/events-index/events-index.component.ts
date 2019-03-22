import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/Event';
 import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.css']
})
export class EventsIndexComponent implements OnInit {
  
  constructor(private _eventService: EventsService) { }
  columnNames = ['About', 'EventName', 'FName', 'LName','AgeAtEvent', 'buttons'];
  dataSource: MatTableDataSource<Event> 
  

  ngOnInit() {
    this._eventService.getEvents().subscribe((events: Event[]) => {
      this.dataSource = new MatTableDataSource<Event>(events);
    });
  }

}
