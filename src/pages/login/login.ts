import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { ReservePage } from '../reserve/reserve';
import { AuthService } from '../../services/auth.service';
import {Location} from '@angular/common';
//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  showSpinner:any;
  payload:any;
  error:any;
  errorm:any;
  constructor(public location:Location,public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public viewController: ViewController) {
    this.showSpinner = false;
    this.payload = {};
    this.error = false;
    this.errorm = '';
  }

  ionViewDidLoad() { }

  cancel() {
    this.viewController.dismiss(false);
  }

  login() {
    this.showSpinner = true;
    var self = this;
    this.authService.login(this.payload).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          self.authService.setAccessToken(data.token);
          self.viewController.dismiss(true);
        }
      },
      err => {
        var temp = JSON.parse(err._body);
        self.showSpinner = false;
        if (!temp.success) {
          self.error = true;
          self.errorm = temp.message;
        }
      },
      () => console.log('Logging in....')
    );
  }

}
