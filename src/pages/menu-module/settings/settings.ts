import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

import { StorageProvider } from './../../../providers/storage/storage';
import { TouchIdProvider } from './../../../providers/touch-id/touch-id';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

  public frmSetting = new FormGroup({
    pushNotification: new FormControl({ value: true, disabled: true }),
    touchID: new FormControl({ value: false, disabled: false }),
    vibrate: new FormControl({ value: false, disabled: true }),
    locationTracking: new FormControl({ value: false, disabled: true }),
    emailNotification: new FormControl({ value: false, disabled: true })
  });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: StorageProvider,
    private touchIdProvider: TouchIdProvider,
  ) { }

  async onchangeTouch() {

    if (!this.frmSetting.controls.touchID.value) {
      return this.storage.set(this.storage.data.isTouchid, false);
    }

    if (! await this.touchIdProvider.isTouchAvailable()) {
      this.frmSetting.controls.touchID.setValue(false);
      this.storage.set(this.storage.data.isTouchid, false);
      return;
    }

    if( await this.touchIdProvider.verifyFingerPrint()){
      this.storage.set(this.storage.data.isTouchid, this.frmSetting.controls.touchID.value);
    } else {
      this.frmSetting.controls.touchID.setValue(false);
      this.storage.set(this.storage.data.isTouchid, false);
    }
  }
}
