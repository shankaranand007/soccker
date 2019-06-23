import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notification-search',
  templateUrl: 'notification-search.html',
})
export class NotificationSearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  pop(){
    this.navCtrl.pop();
  }
  searchedData(searchTxt:any){
  }
}
