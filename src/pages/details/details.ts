import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConfig } from '../../config/app.config';
import { MakeReservePage } from '../make-reserve/make-reserve';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  location: any;
  date:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public appConfig:AppConfig,private alertCtrl: AlertController) {
    var obj = navParams.data['location'];
    this.location = obj.lat + "," + obj.lng;
    this.date = Date();
  }

  ionViewDidLoad() {

  }

  report() {
    let alert = this.alertCtrl.create({
    title: 'Confirm reporting',
    message: 'Are you sure your want to report this location for violationing the user agreement of Spot Exchange',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel');
        }
      },
      {
        text: 'Report',
        handler: () => {
          console.log('Reporting');
        }
      }
    ]
  });
  alert.present();
  }

  reserve() {
    this.navCtrl.push(MakeReservePage, { });
  }

}
