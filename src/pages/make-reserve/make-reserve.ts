import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConfig } from '../../config/app.config';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-make-reserve',
  templateUrl: 'make-reserve.html'
})
export class MakeReservePage {

  location:any;
  dateTimeStart:Date;
  dateTimeEnd:Date;
  rate:any;
  total:any;
  showSpinner:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public appConfig:AppConfig) {
    this.location = "41.881832,-87.623177";
    this.dateTimeStart = null;
    this.dateTimeEnd = null;
    this.rate = 15.65;
    this.total = 0;
    console.log(this.dateTimeEnd);
    this.showSpinner = false;
  }

  ionViewDidLoad() {

  }

  reservenow() {
    this.showSpinner = true;
    var self = this;
    setTimeout(function(){
      self.navCtrl.setRoot(HistoryPage);
    }, 2000);
  }

  change(date) {

    console.log(this.dateTimeStart);
    console.log(this.dateTimeEnd);

    if ((this.dateTimeStart != null) && (this.dateTimeEnd != null)) {
      console.log("comepare");
      var start = new Date(this.dateTimeStart);
      var end = new Date(this.dateTimeEnd);
      var hours = Math.abs(start.getTime() - end.getTime()) / 36e5;
      console.log(hours);
      this.total = Math.round((this.rate * hours) * 100) / 100
    }

  }



}
