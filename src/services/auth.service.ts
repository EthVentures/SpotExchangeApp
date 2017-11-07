import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthService {

  isAuth:boolean;
  token:string;

  constructor(public zone: NgZone,public http:Http,private storage: Storage) {
    this.isAuth = false;

    var self = this;
  }

  public isAuthUser() {
    return this.isAuth;
  }

  register(params) {
    let body = JSON.stringify(params);
    let head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post("http://localhost:8888/api/user/register", body, { headers : head }).map(res =>  res.json());
  }

  private getStorageVariable(name) {

  }

  private setStorageVariable(name, data) {
  }

  private setIdToken(token) {

  }

  setAccessToken(token) {
    this.isAuth = true;
    console.log(token);
    localStorage.setItem('id_token', token);
  }

  getToken () { return localStorage.getItem('id_token') || ''; }

  //setCachedToken = function (token) { localStorage.setItem('id_token', token); };
  //clearCachedToken = function () { localStorage.removeItem('id_token'); };

  public isAuthenticated() {

  }

  login(params) {
    let body = JSON.stringify(params);
    let head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post("http://localhost:8888/api/user/authenticate", body, { headers : head }).map(res =>  res.json());
  }

  public logout() {
    this.isAuth = false;
    localStorage.removeItem('id_token');
  }

}
