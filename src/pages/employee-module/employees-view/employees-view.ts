import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MockData } from '../../../providers/mock-data/mock-data';
import { EmployeesAdd } from '../employees-add/employees-add';

/**
 * Generated class for the EmployeesViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-employees-view',
  templateUrl: 'employees-view.html',
})
export class EmployeesView {
  public homepagetab: string = "personaldetials";
  employee: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mockData:MockData) {
    console.log(this.navParams.data);
    this.employee = this.mockData.employees.find(emp=>emp.id == this.navParams.data);
  }

  ionViewDidLoad() {
  }
  pop() {
    this.navCtrl.pop();
  }
  edit(){
    this.navCtrl.push(EmployeesAdd,this.navParams.data);
  }


}
