import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubTabPage } from '../../home-module/sub-tab/sub-tab';

@Component({
  selector: 'page-deeplinks',
  templateUrl: 'deeplinks.html',
})

export class DeeplinksPage {
  public args: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.args = this.navParams.data;
  }

  home(){
    this.navCtrl.push(SubTabPage);
  }
}
