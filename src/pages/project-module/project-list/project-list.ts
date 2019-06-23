import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProjectSearchPage } from '../project-search/project-search';
import { MockData } from '../../../providers/mock-data/mock-data';
import { ProjectsAddPage } from '../projects-add/projects-add';

/**
 * Generated class for the ProjectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectListPage {
  projectList: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private mockData:MockData) {
   this.getProjectList();
  }
  getProjectList(){
    this.projectList = this.mockData.projects;
  }
  ionViewDidLoad() {
  }
  search(){
    this.navCtrl.push(ProjectSearchPage);
  }
  add(){
    this.navCtrl.push(ProjectsAddPage);

  }
}
