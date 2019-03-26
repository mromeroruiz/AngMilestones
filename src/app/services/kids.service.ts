import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kid } from '../models/Kid';
import {APIURL} from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class KidsService {

  constructor(private _http: HttpClient) { }

  getKids() {
    return this._http.get(`${APIURL}/Kid/AllKids`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createKid(kid: Kid) {
    return this._http.post(`${APIURL}/Kid/Create`, kid, { headers: this.getHeaders()});
  }

  getKid(id: string) {
    return this._http.get(`${APIURL}/Kid/ByKid/${id}`, { headers: this.getHeaders() });
  }

  updateKid(kid: Kid) {
    return this._http.put(`${APIURL}/Kid/Edit`, kid, { headers: this.getHeaders() });
  }

  deleteKid(id: number) {
    return this._http.delete(`${APIURL}/Kid/Delete/${id}`, {headers: this.getHeaders() });
  }

}
