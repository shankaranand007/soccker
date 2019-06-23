import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VendorsAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vendors-add',
  templateUrl: 'vendors-add.html',
})
export class VendorsAddPage {
title = 'Add Vendor';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.data && navParams.data != undefined && navParams.data > 0){
      this.title = 'Edit Vendor';
    }
  }

  ionViewDidLoad() {
  }
  pop(){
this.navCtrl.pop();
  }
  saveVendor(){
    this.navCtrl.pop();

  }
}
