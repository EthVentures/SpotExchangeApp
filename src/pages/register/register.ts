import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewController: ViewController) {
  }

  ionViewDidLoad() {

  }

  register() {
    this.viewController.dismiss(true);
  }

  cancel() {
    this.viewController.dismiss(false);
  }

}
