import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { EmployeesAdd } from '../employees-add/employees-add';
import { EmployeesSearch } from '../employees-search/employees-search';
import { EmployeesView } from '../employees-view/employees-view';
import { orderBy } from 'lodash';
import { MockData } from '../../../providers/mock-data/mock-data';

@Component({
  selector: 'employees-list',
  templateUrl: 'employees-list.html'
})
export class EmployeesList {

  employees: any = [];
  EmployeeSortFields: any = [
    { field: 'Name', displayName: 'Name' },
    { field: 'Designation', displayName: 'Designation' },
    { field: 'Vendor', displayName: 'Vendor' },
  ];
  sortbyfield: string = "Name";
  sortbyorder: any = "asc";
  today = new Date();  

  constructor(
    private navCtrl: NavController,
    private actCtrl: ActionSheetController,
    private mockData: MockData
   ) {
    this.getEmployees();
  }
  addEmployee() {
    this.navCtrl.push(EmployeesAdd)
  }
  filterEmployee() {
    let actionSheet = this.actCtrl.create({
      title: 'Sort By',
      cssClass: '',
      buttons: this.getActionSheetitem()
    });
    actionSheet.present();

  }
  getIcons(item) {
    if (this.sortbyfield == item.field) {
      if (this.sortbyorder == 'asc') {
        return 'showIconAsc';
      } else {
        return 'showIconDesc';
      }
    } else {
      return null;
    }
  }
  getActionSheetitem() {
    let actionlist = [];


    this.EmployeeSortFields.forEach(item => {
      actionlist.push(
        {
          text: item.displayName,
          icon: this.getIcons(item),
          handler: () => {
            if (this.sortbyfield != item.field) {
              this.sortbyfield = item.field;
              this.sortbyorder = 'asc';
            } else {
              if (this.sortbyorder == 'asc') {
                this.sortbyorder = 'desc';
              } else {
                this.sortbyorder = 'asc';
              }
            }
    this.sortEmployees();
          }
        },

      );

    });
    actionlist.push(
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {

        }
      }

    );
    return actionlist;
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
      
    });
    this.sortEmployees();

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
  sortEmployees(){
    this.employees = orderBy(this.employees, [this.sortbyfield], [this.sortbyorder]);

  }
  searchEmployee() {
    this.navCtrl.push(EmployeesSearch)
  }
  viewEmployee(id) {
    this.navCtrl.push(EmployeesView,id)
  }

}
