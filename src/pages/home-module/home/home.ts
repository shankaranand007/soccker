import { Component } from '@angular/core';
import { NavController, ToastController, MenuController } from 'ionic-angular';
import * as moment from 'moment';
import { State } from './../../../providers/state/state';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public greeting;
  public userInfo;
  public trends: any = [];
  public trendsCount: number = 0;

  constructor(
    public navCtrl: NavController,
    private toastController: ToastController,
    private menuCtrl: MenuController,
    private state: State
  ) {
    this.menuCtrl.swipeEnable(true)
    this.setGreeting();
  }

  ionViewDidLoad() {
    this.setUserInfo();
  }

  private setUserInfo() {
    this.userInfo = this.state.get(this.state.data.userInfo)
    // this.displayName = userInfo.DisplayName;
  }

  private setGreeting() {
    let currentData = new Date();
    let time = currentData.getHours();

    if (time < 12) {
      this.greeting = "Good Morning";
    } else if (time >= 12 && time < 16) {
      this.greeting = "Good Afternoon";
    } else {
      this.greeting = "Good Evening";
    }
  }

  openSearch() {
    let toast = this.toastController.create({
      message: 'Search Clicked',
      duration: 1000,
      position: 'bottom',
      cssClass: 'customToaster-error'
    });
    toast.present(toast);
  }


  getRelativeTime(date) {
    return moment(date).fromNow();
  }

}
