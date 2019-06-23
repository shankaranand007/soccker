import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})

export class SharePage {

  public note: string = "Share this secret xxx";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing
  ) {}

  share() {
    this.socialSharing.share(this.note, null, null, null);
  }

  pop() {
    this.navCtrl.pop();
  }

}
