import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConfig } from '../../config/app.config';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  seqvalue: string = "0";

  constructor(public navCtrl: NavController, public navParams: NavParams,public appConfig:AppConfig) {
  }

  ionViewDidLoad() {

  }

}
