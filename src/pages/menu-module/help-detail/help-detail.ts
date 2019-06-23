import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-help-detail',
  templateUrl: 'help-detail.html',
})

export class HelpDetailPage {

  public mailLink = "mailto:contact@iff.com";
  public content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.content = navParams.get('content');
  }

  public pop() {
    this.navCtrl.pop();
  }

}
