import { Injectable } from '@angular/core';

declare var process: any;

@Injectable()
export class AppConfig {
  public API_URL: string;
  public GOOGLE_MAP_API_KEY: string;
  public GOOGLE_MAP_STATIC_API_KEY: string;

  constructor() {
    this.API_URL = this._readString('API_URL', '');
    this.GOOGLE_MAP_API_KEY = this._readString('GOOGLE_MAP_API_KEY', '');
    this.GOOGLE_MAP_STATIC_API_KEY = this._readString('GOOGLE_MAP_STATIC_API_KEY', '');
  }

  private _readString(key: string, defaultValue?: string): string {
    const v = process.env[key];
    return v === undefined ? defaultValue : String(v);
  }
}
