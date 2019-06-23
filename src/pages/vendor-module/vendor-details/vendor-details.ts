import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MockData } from '../../../providers/mock-data/mock-data';
import { filter } from 'lodash';
import { VendorsAddPage } from '../vendors-add/vendors-add';
import { EmployeesView } from '../../employee-module/employees-view/employees-view';

/**
 * Generated class for the VendorDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vendor-details',
  templateUrl: 'vendor-details.html',
})
export class VendorDetailsPage {
  vendor:any = {};
  employees: any = [];
  today = new Date();  


  constructor(public navCtrl: NavController, public navParams: NavParams, private mockData:MockData) {
    this.vendor = this.mockData.vendors.find(vendor=>vendor.id == this.navParams.data);
    this.getEmployees();
  }

  ionViewDidLoad() {
  }

  pop(){
    this.navCtrl.pop();
  }
  getEmployees() {
this.employees = filter(this.mockData.employees,(employee)=>employee.vendorId == this.navParams.data);
this.employees.forEach(emp=>{
  var timeDiff = Math.abs(emp['ExpiryDate'].getTime() - this.today.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  if(diffDays<7 && diffDays>0){
   emp['showExpires']=diffDays;
  }
  emp['indicator'] = this.getIndicator(emp.DesignationID);
  
});
  }
  getIndicator(Id){
    switch (Id) {
      case 1:
      return 'role1'
      case 2:
      return 'role2'
      case 3:
      return 'role3'
      case 4:
      return 'role4'
      case 5:
      return 'role5'

 }
  }

edit(){
  this.navCtrl.push(VendorsAddPage,this.navParams.data);
}
viewEmployee(id){
  this.navCtrl.push(EmployeesView,id);

}
  
}
