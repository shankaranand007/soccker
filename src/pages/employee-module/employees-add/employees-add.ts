import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmployeesAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-employees-add',
  templateUrl: 'employees-add.html',
})
export class EmployeesAdd {
  title = 'Add Employee';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.data && navParams.data != undefined && navParams.data > 0){
      this.title = 'Edit Employee';
    }
  }

  ionViewDidLoad() {
  }
  pop() {
    this.navCtrl.pop();
  }
  saveEmployee(){
    this.navCtrl.pop();
    
  }

}
