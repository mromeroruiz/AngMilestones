import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../models/Event';

const ApiUrl = 'https://milestones1150.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
 
  constructor(private _http: HttpClient) { }

  postEvent(event: Event){
    return this._http.post(`${ApiUrl}/Event/Create`, event, { headers: this.getHeaders() });
  }

  getEvents(){
    return this._http.get(`${ApiUrl}/Event/All`, { headers: this.getHeaders() });
  }

  getEvent(){
    return this._http.get(`${ApiUrl}/Event/ByEvent/{id}`, { headers: this.getHeaders() });
  }

  getEventsByKid(){
    return this._http.get(`${ApiUrl}/Event/ByKid/{id}`, { headers: this.getHeaders() });
  }

  putEvent(){
    return this._http.put(`${ApiUrl}/Event/Edit`, { headers: this.getHeaders() });
  }

  deleteEvent(){
    return this._http.delete(`${ApiUrl}/Event/Delete?id={id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
