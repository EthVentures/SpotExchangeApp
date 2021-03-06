import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  @ViewChild(Nav) nav: Nav;
  user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthService) {
    this.user = {};
    this.user = authService.getUser();
  }

  ionViewDidLoad() {

  }

  logoff() {
    this.authService.logout();
    this.navCtrl.setRoot(HomePage);

  }

}
