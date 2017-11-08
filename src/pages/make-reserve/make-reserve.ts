import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConfig } from '../../config/app.config';
import { HistoryPage } from '../history/history';
import { AuthService } from '../../services/auth.service';

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
  info:any;

  constructor(public authService:AuthService,public navCtrl: NavController, public navParams: NavParams,public appConfig:AppConfig) {
    var obj = navParams.data['item'];
    this.location = obj.lat + "," + obj.lng;
    this.dateTimeStart = null;
    this.dateTimeEnd = null;
    this.total = 0;
    //console.log(this.dateTimeEnd);
    this.showSpinner = false;

    this.info = navParams.data['item'];
    this.rate = this.info.rate;

    console.log(this.info);

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
    if ((this.dateTimeStart != null) && (this.dateTimeEnd != null)) {
      var start = new Date(this.dateTimeStart);
      var end = new Date(this.dateTimeEnd);
      var hours = Math.abs(start.getTime() - end.getTime()) / 36e5;
      this.total = Math.round((this.rate * hours) * 100) / 100
    }

  }



}
