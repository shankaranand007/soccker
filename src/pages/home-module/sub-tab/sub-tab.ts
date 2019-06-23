import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VendorPage } from '../../vendor-module/vendor/vendor';
import { EmployeesList } from '../../employee-module/employees-list/employees-list';
import { HomePage } from '../home/home';
import { ProjectListPage } from '../../project-module/project-list/project-list';
import { NotificationListPage } from '../../notification-module/notification-list/notification-list';


@Component({
  selector: 'page-sub-tab',
  templateUrl: 'sub-tab.html',
})

export class SubTabPage {
  public subtab1Root = VendorPage;
  public subtab2Root = EmployeesList;
  public subtab3Root = HomePage;
  public subtab4Root = ProjectListPage;
  public subtab5Root = NotificationListPage;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

  }

  ionViewDidLoad() {
  }

}
