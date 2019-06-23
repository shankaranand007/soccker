import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MockData } from '../../../providers/mock-data/mock-data';
import { filter } from 'lodash';
import { VendorDetailsPage } from '../vendor-details/vendor-details';

/**
 * Generated class for the VendorSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vendor-search',
  templateUrl: 'vendor-search.html',
})
export class VendorSearchPage {
  searchedVendorList: any[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private mockData:MockData) {
  }

  ionViewDidLoad() {
  }
  searchedData(searchTxt:any){
    if(searchTxt.target.value && searchTxt.target.value.trim() != ''){
    this.searchedVendorList = filter(this.mockData.vendors,(vendor)=>vendor.name.toLowerCase().includes(searchTxt.target.value.toLowerCase()));
   }else{
      this.searchedVendorList=[]
    }
  }
  getDetails(id:any){
    this.navCtrl.push(VendorDetailsPage,id);
  }
  pop(){
    this.navCtrl.pop();
  }
}
