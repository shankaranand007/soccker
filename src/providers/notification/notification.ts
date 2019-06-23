import { Injectable } from '@angular/core';
import { SubTabPage } from '../../pages/home-module/sub-tab/sub-tab';

declare let ParsePushPlugin: any;
@Injectable()
export class NotificationProvider {

  constructor() { }

  resetBadge() {
    try {
      ParsePushPlugin.resetBadge();
    } catch (error) {
    }
  }

  pushregister() {
    try {
      ParsePushPlugin.register();
    } catch (error) {
    }

  }

  pushInit(baseObject) {

    try {
      ParsePushPlugin.register();

      ParsePushPlugin.on('receivePN', function () { });

      ParsePushPlugin.on('openPN', async function (pn) {

        this.resetBadge();

        if (pn.url && pn.param) {
          baseObject.navCtrl.setRoot(pn.url, pn.param);
        } else if (pn.url && !pn.param) {
          baseObject.navCtrl.setRoot(pn.url);
        } else {
          baseObject.navCtrl.setRoot(SubTabPage);
        }

      }).bind(this);
    } catch (error) { }

  }
}

