import { Injectable } from '@angular/core';
import { TouchID } from '@ionic-native/touch-id';
import { AlertController } from 'ionic-angular';

@Injectable()
export class TouchIdProvider {

  constructor(private touchid: TouchID, private alertController: AlertController) { }

  public getMessage(err) {
    if (err === 'cordova_not_available') {
      return 'Platform isn\'t available';
    }

    if (!err || !err.localizedDescription) {
      return 'Something went wrong'
    }

    return err.localizedDescription;
  }

  public async isTouchAvailable() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.touchid.isAvailable();
        resolve(true);
      } catch (err) {
        this.alertController.create({
          title: 'Error',
          subTitle: this.getMessage(err),
          buttons: ['Ok']
        }).present();
        resolve(false);
      }

    })
  }

  public async verifyFingerPrint() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.touchid.verifyFingerprint('Scan your fingerprint please')
        resolve(true);
      } catch (err) {
        this.alertController.create({
          title: 'Error',
          subTitle: this.getMessage(err),
          buttons: ['Ok']
        }).present();
        resolve(false)
      }
    })
  }

}
