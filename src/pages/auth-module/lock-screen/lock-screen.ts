import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from './../../../providers/storage/storage';
import { TouchIdProvider } from './../../../providers/touch-id/touch-id';
import { LoginPage } from '../login/login';
import { SubTabPage } from '../../home-module/sub-tab/sub-tab';

@Component({
  selector: 'page-lock-screen',
  templateUrl: 'lock-screen.html',
})

export class LockScreenPage {

  constructor(
    private navCtrl: NavController,
    private storage: StorageProvider,
    private navParams: NavParams,
    private touchIdProvider: TouchIdProvider,
  ) {
    this.verifyTouch();

  }

  private async verifyTouch(){
    if (! await this.touchIdProvider.isTouchAvailable()) {
      this.redirectToLogin();
      return;
    }

    if (await this.touchIdProvider.verifyFingerPrint()) {
      this.redirectToHome();
    } else {
      this.redirectToLogin();
    }
  }

  private redirectToLogin() {
    this.storage.removeAll();
    localStorage.clear();
    sessionStorage.clear();
    this.navCtrl.setRoot(LoginPage, { touchIDFailed: true });
  }

  private redirectToHome() {
    if (this.navParams.data.url && this.navParams.data.param) {
      let pn = this.navParams.data;
      this.navCtrl.setRoot(pn.url, pn.param);
    }
    else {
      this.navCtrl.setRoot(SubTabPage);
    }
  }
}


