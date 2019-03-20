import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
 import { KidsService } from '../../services/kids.service';
import { Event } from '../../models/Event';
 import { Kid } from '../../models/Kid';
 import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.css']
})
export class EventsIndexComponent implements OnInit {

  constructor(private _eventService: EventsService, private _kidService: KidsService) { }
  columnNames = ['About', 'EventID', 'EventName', 'FName', 'LName', 'AgeAtEvent'];
  dataSource: MatTableDataSource<Event> 
  dataSourceTwo: MatTableDataSource<Kid>
 

  ngOnInit() {
    this._eventService.getEvents().subscribe((events: Event[]) => {
      this.dataSource = new MatTableDataSource<Event>(events);
    });

    this._kidService.getKids().subscribe((kids: Kid[]) => {
      this.dataSourceTwo = new MatTableDataSource<Kid>(kids);
    })
  }

}
