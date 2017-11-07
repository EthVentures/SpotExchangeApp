import { Injectable } from '@angular/core';

declare var process: any;

@Injectable()
export class AppConfig {
  public API_URL: string;
  public GOOGLE_MAP_API_KEY: string;
  public GOOGLE_MAP_STATIC_API_KEY: string;
  public PARKWHIZ_API_KEY:string;
  public NODE_GLUE_URL:string;
  public NO_FAKE_SWITCH:any;
  public IBM_WATSON_ML_TOKEN:string;
  public IBM_WATSON_ML_MODEL:string;

  constructor() {
    this.API_URL = this._readString('API_URL', '');
    this.NODE_GLUE_URL = this._readString('NODE_GLUE_URL', '');
    this.GOOGLE_MAP_API_KEY = this._readString('GOOGLE_MAP_API_KEY', '');
    this.GOOGLE_MAP_STATIC_API_KEY = this._readString('GOOGLE_MAP_STATIC_API_KEY', '');
    this.PARKWHIZ_API_KEY = this._readString('PARKWHIZ_API_KEY', '');
    this.NO_FAKE_SWITCH = this._readString('NO_FAKE_SWITCH', '');
    this.NO_FAKE_SWITCH = parseInt(this.NO_FAKE_SWITCH);
    this.IBM_WATSON_ML_TOKEN = this._readString('IBM_WATSON_ML_TOKEN', '');
    this.IBM_WATSON_ML_MODEL = this._readString('IBM_WATSON_ML_MODEL', '');
  }

  private _readString(key: string, defaultValue?: string): string {
    const v = process.env[key];
    return v === undefined ? defaultValue : String(v);
  }
}
