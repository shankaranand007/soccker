import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectsAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-projects-add',
  templateUrl: 'projects-add.html',
})
export class ProjectsAddPage {
  title = 'Add Project';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.data && navParams.data != undefined && navParams.data > 0){
      this.title = 'Edit Project';
    }
  }

  ionViewDidLoad() {
  }
  pop(){
this.navCtrl.pop();
  }
  saveProject(){
    this.navCtrl.pop();

  }
}
