import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable()
export class AuthService {

  isAuth:boolean;
  token:string;

  constructor(public zone: NgZone) {
    this.isAuth = false;
  }

  public isAuthUser() {
    return this.isAuth;
  }

  private getStorageVariable(name) {

  }

  private setStorageVariable(name, data) {
  }

  private setIdToken(token) {

  }

  private setAccessToken(token) {

  }

  public isAuthenticated() {

  }

  public getToken() {
    return this.token;
  }

  public login(token) {
    this.isAuth = true;
    this.token = token;
  }

  public logout() {
    this.isAuth = false;
  }

}
