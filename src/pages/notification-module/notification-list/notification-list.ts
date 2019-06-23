import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationSearchPage } from '../notification-search/notification-search';

/**
 * Generated class for the NotificationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notification-list',
  templateUrl: 'notification-list.html',
})
export class NotificationListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  search(){
    this.navCtrl.push(NotificationSearchPage);
  }

}
