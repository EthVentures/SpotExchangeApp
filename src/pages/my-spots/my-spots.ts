import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConfig } from '../../config/app.config';
import { AddSpotPage } from '../add-spot/add-spot';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-my-spots',
  templateUrl: 'my-spots.html',
})
export class MySpotsPage {

  myspots:any;
  constructor(public authService:AuthService,public navCtrl: NavController, public navParams: NavParams,public appConfig:AppConfig) {
    this.myspots = [];
  }

  view() {

  }

  add() {
    this.navCtrl.push(AddSpotPage, { });
  }

  ionViewDidLoad() { }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    if (this.appConfig.NO_FAKE_SWITCH) {
    this.myspots = [];
    var id = "resource:io.ethventures.thespot.SpotUser#" + this.authService.getUser().id;

    console.log(id);
    this.authService.getSpots().subscribe(
      data => {
        if (data.success) {
          var spots = data.spots;
          for (var i = 0; i < spots.length; i++) {
            if (spots[i].owner === id) {
              var cords = spots[i];
              var item = JSON.parse(cords.coordinates);
              item['icon'] = 'ours.png';
              item['name'] = '';
              item['address'] = cords.address.street + ' ' + cords.address.city + ' ' + cords.address.state ;
              item['rate'] = cords.ratePerHour;
              item['valet'] = cords.features.valet;
              item['covered'] = cords.features.covered;
              item['selfPark'] = cords.features.selfPark;
              item['inOutAllowed'] = cords.features.inOutAllowed;
              item['handicapAccessible'] = cords.features.handicapAccessible;
              this.myspots.push(item);
            }
          }
        }
        console.log(this.myspots);
      },
      err => {
        console.log(err);
      },
      () => console.log('')
      );
    }
  }

}
