import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConfig } from '../../config/app.config';

@IonicPage()
@Component({
  selector: 'page-my-spots',
  templateUrl: 'my-spots.html',
})
export class MySpotsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public appConfig:AppConfig) {
  }

  view() {

  }

  ionViewDidLoad() { }

}
