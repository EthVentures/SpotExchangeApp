/*import { Injectable } from '@angular/core';

declare const webpackGlobalVars: any;

@Injectable()
export class AppConfig {
  public static apiServer = webpackGlobalVars.foo;

   public static fooBar = {
       bazBaz: 'foo',
       fooBar: webpackGlobalVars.baz
   }

  constructor() {
    //this.apiBaseUrl = this._readString('API_URL', '');
    //this.googleMapApiKey = this._readString('GOOGLE_MAP_API_KEY', '');

    console.log(webpackGlobalVars);
  }

  private _readString(key: string, defaultValue?: string): string {
    //const v = process.env[key];
    //return v === undefined ? defaultValue : String(v);
    return "";
  }
}*/
import { Injectable } from '@angular/core';

declare var process: any;

@Injectable()
export class AppConfig {
  public apiBaseUrl: string;
  public googleMapApiKey: string;

  constructor() {
    this.apiBaseUrl = this._readString('API_URL', '');
    this.googleMapApiKey = this._readString('GOOGLE_MAP_API_KEY', '');

    console.log('AppConfig', process.env);
  }

  private _readString(key: string, defaultValue?: string): string {
    //const v = process.env[key];
    //return v === undefined ? defaultValue : String(v);
    return '';
  }
}
