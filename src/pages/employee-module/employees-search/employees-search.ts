import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { filter } from 'lodash';
import { MockData } from '../../../providers/mock-data/mock-data';

/**
 * Generated class for the EmployeesSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-employees-search',
  templateUrl: 'employees-search.html',
})
export class EmployeesSearch{
  employees: any = [];
  today = new Date();  
  searchedEmployeeList: any = [];

   
    constructor(public navCtrl: NavController, public navParams: NavParams, private mockData: MockData) {
    this.getEmployees();
  }

  ionViewDidLoad() {
  }
   pop() {
    this.navCtrl.pop();
  }

 
  getEmployees() {

    this.employees = this.mockData.employees;
    
    this.employees.forEach(emp=>{
      var timeDiff = Math.abs(emp['ExpiryDate'].getTime() - this.today.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      if(diffDays<7 && diffDays>0){
       emp['showExpires']=diffDays;
      }
      emp['indicator'] = this.getIndicator(emp.DesignationID);
      
    })

  }
  getIndicator(Id){
    switch (Id) {
      case 1:
      return 'active-status role1'
      case 2:
      return 'active-status role2'
      case 3:
      return 'active-status role3'
      case 4:
      return 'active-status role4'
      case 5:
      return 'active-status role5'

 }
  }
  searchedData(searchTxt:any){
    if(searchTxt.target.value && searchTxt.target.value.trim() != ''){
    this.searchedEmployeeList = filter(this.employees,(emp)=>emp.Name.toLowerCase().includes(searchTxt.target.value.toLowerCase()));
   }else{
      this.searchedEmployeeList=[]
    }
  }



}
