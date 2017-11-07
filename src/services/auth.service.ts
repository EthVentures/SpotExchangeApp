import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AppConfig } from '../config/app.config';

@Injectable()
export class AuthService {

  isAuth:boolean;
  token:string;
  user:any;

  constructor(public zone: NgZone,public http:Http,private storage: Storage,public appConfig:AppConfig) {
    this.isAuth = false;
  }

  refresh() {
    var self = this;
    this.storage.get('id_token').then((val) => {
      if ((val != '') && (val != null)) {
        self.isAuth = true;
        self.token = val;
      } else {
        self.isAuth = false;
      }
    });
    this.storage.get('user').then((val) => {
      self.user = val;
    });
  }

  public isAuthUser() {
    return this.isAuth;
  }

  getUser() {
    return this.user;
  }

  register(params) {
    let body = JSON.stringify(params);
    let head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.appConfig.NODE_GLUE_URL + "api/user/register", body, { headers : head }).map(res =>  res.json());
  }

  private getStorageVariable(name) {

  }

  private setStorageVariable(name, data) {
  }

  private setIdToken(token) {

  }

  saveSpot(params) {
    params['token'] = this.getToken();
    let body = JSON.stringify(params);
    let head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.appConfig.NODE_GLUE_URL + "api/data/spot", body, { headers : head }).map(res =>  res.json());
  }

  setAccessToken(token,user) {
    this.isAuth = true;
    this.token = token;
    this.storage.set('id_token', token);
    this.storage.set('user', user);
    localStorage.setItem('id_token', token);
  }

  getToken () { return this.token; }

  //setCachedToken = function (token) { localStorage.setItem('id_token', token); };
  //clearCachedToken = function () { localStorage.removeItem('id_token'); };

  public isAuthenticated() {

  }

  login(params) {
    let body = JSON.stringify(params);
    let head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.appConfig.NODE_GLUE_URL + "api/user/authenticate", body, { headers : head }).map(res =>  res.json());
  }

  public logout() {
    this.isAuth = false;
    this.storage.set('id_token', '');
    this.storage.set('user', '');
    localStorage.removeItem('id_token');
  }

}
