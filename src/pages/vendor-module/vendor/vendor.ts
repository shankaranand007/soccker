import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VendorDetailsPage } from '../vendor-details/vendor-details';
import { MockData } from '../../../providers/mock-data/mock-data';
import { VendorSearchPage } from '../vendor-search/vendor-search';
import { VendorsAddPage } from '../vendors-add/vendors-add';

@Component({
  selector: 'page-vendor',
  templateUrl: 'vendor.html',
})
export class VendorPage {
vendors:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private mockData:MockData) {
  this.vendors = this.mockData.vendors;
  }

  ionViewDidLoad() {
  }
  getDetails(id:any){
    this.navCtrl.push(VendorDetailsPage,id);
  }
  search(){
    this.navCtrl.push(VendorSearchPage);
  }
  addVendor(){
    this.navCtrl.push(VendorsAddPage);

  }
}
