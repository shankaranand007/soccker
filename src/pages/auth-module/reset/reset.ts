import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginService } from '../../../providers/service/login_service';
/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
  public reset:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,public login:LoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }
  reset_pass(){
    // this.login.reset_password()
  }
}
