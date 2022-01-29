import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  idRest: any
  prodId: any
  constructor(private _http: HttpClient, private _router: Router) { }


  getIdReg() {
    return this.idRest
  }


  setIdReg(prodId) {
    this.prodId = prodId

  }
  getIdRegi() {
    return this.prodId
  }

}
