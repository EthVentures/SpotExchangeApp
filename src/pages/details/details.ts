import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  location: any;
  date:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var obj = navParams.data['location'];
    this.location = obj.lat() + "," + obj.lng();
    this.date = Date();
  }

  ionViewDidLoad() {
  }

}
