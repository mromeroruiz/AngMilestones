import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kid } from '../models/Kid';

const ApiUrl = 'https://milestones1150.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class KidsService {

  constructor(private _http: HttpClient) { }

  getKids() {
    return this._http.get(`${ApiUrl}/Kid/AllKids`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createKid(kid: Kid) {
    return this._http.post(`${ApiUrl}/Kid/Create`, kid, { headers: this.getHeaders()});
  }

  getKid(id: string) {
    return this._http.get(`${ApiUrl}/Kid/${id}`, { headers: this.getHeaders() });
  }

}
