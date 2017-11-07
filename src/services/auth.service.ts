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
    storage.get('token').then((val) => {
      console.log('Token');
      console.log(val);
      if ((val != '') && (val != null)) {
        self.token = val;
        self.isAuth = true;
      } else {
        self.token = '';
        self.isAuth = false;
      }
    });

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
    this.storage.set('token', token);
  }

  public isAuthenticated() {

  }

  public getToken() {
    return this.token;
  }

  login(params) {
    let body = JSON.stringify(params);
    let head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post("http://localhost:8888/api/user/authenticate", body, { headers : head }).map(res =>  res.json());
  }

  public logout() {
    this.storage.set('token', '');
    this.isAuth = false;
  }

}
