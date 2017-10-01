import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { ReservePage } from '../reserve/reserve';
import { AuthService } from '../../services/auth.service';

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public viewController: ViewController) {
  }

  ionViewDidLoad() { }

  cancel() {
    this.viewController.dismiss(false);
  }

  login() {
    this.authService.login();
    this.viewController.dismiss(true);
  }

}
