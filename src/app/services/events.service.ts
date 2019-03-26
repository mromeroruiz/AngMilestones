import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../models/Event';
import { APIURL } from '../../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class EventsService {
 
  constructor(private _http: HttpClient) { }

  postEvent(event: Event){
    return this._http.post(`${APIURL}/Event/Create`, event, { headers: this.getHeaders() });
  }

  getEvents(){
    return this._http.get(`${APIURL}/Event/All`, { headers: this.getHeaders() });
  }

  getEvent(id: string){
    return this._http.get(`${APIURL}/Event/ByEvent/${id}`, { headers: this.getHeaders() });
  }

  getEventsByKid(id: string){
    return this._http.get(`${APIURL}/Event/ByKid/{id}`, { headers: this.getHeaders() });
  }

  putEvent(event: Event){
    return this._http.put(`${APIURL}/Event/Edit`, event, { headers: this.getHeaders() });
  }

  deleteEvent(id: number){
    return this._http.delete(`${APIURL}/Event/Delete/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
