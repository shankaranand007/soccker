import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { filter } from 'lodash';
import { MockData } from '../../../providers/mock-data/mock-data';



/**
 * Generated class for the ProjectSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-project-search',
  templateUrl: 'project-search.html',
})
export class ProjectSearchPage {
  projectList: any=[];
  searchedProjectList:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private mockData:MockData) {
   this.getProjectList();
  }
  getProjectList(){
    this.projectList = this.mockData.projects;
  }
  ionViewDidLoad() {
  }
  pop(){
    this.navCtrl.pop();
  }
  searchedData(searchTxt:any){
    if(searchTxt.target.value && searchTxt.target.value.trim() != ''){
    this.searchedProjectList = filter(this.projectList,(project)=>project.name.toLowerCase().includes(searchTxt.target.value.toLowerCase()));
    }else{
      this.searchedProjectList=[]
    }
  }
}
