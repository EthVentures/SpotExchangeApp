import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
//@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  showSpinner:any;
  payload:any;
  error:any;
  errorm:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewController: ViewController,public authService:AuthService) {
    this.showSpinner = false;
    this.payload = {};
    this.error = false;
    this.errorm = '';
  }

  ionViewDidLoad() {

  }

  register() {
    this.showSpinner = true;
    console.log(this.payload);
    var self = this;
    this.authService.register(this.payload).subscribe(
      data => {
        self.viewController.dismiss(true);
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

  cancel() {
    this.viewController.dismiss(false);
  }

}
