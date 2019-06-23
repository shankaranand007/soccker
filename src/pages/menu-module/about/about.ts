import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Settings } from './../../../providers/settings/settings';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})

export class AboutPage {

  public name: string;
  public version: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = Settings.AppName;
    this.version = Settings.AppVersion;
  }

  pop() {
    this.navCtrl.pop();
  }

}
