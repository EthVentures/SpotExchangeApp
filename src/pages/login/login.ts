import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { ReservePage } from '../reserve/reserve';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';
import { AppConfig } from '../../config/app.config';
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
  constructor(public appConfig:AppConfig,public location:Location,public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public viewController: ViewController) {
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

    if (this.appConfig.NO_FAKE_SWITCH) {
      this.showSpinner = true;
      var self = this;
      this.authService.login(this.payload).subscribe(
        data => {
          console.log(data);
          if (data.success) {
            self.authService.setAccessToken(data.token,data.user);
            self.viewController.dismiss(true);
          }
        },
        err => {
          console.log(err._body);
          var temp = JSON.parse(err._body);
          self.showSpinner = false;
          if (!temp.success) {
            self.error = true;
            self.errorm = temp.message;
          }
        },
        () => console.log('Logging in....')
      );
    } else {
      this.showSpinner = true;
      var self = this;
      setTimeout(function() {
        self.authService.setAccessToken('',{});
        self.viewController.dismiss(true);
      },2000);
    }


  }

}
