import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProjectListPage } from './project-list/project-list';
import { ProjectSearchPage } from './project-search/project-search';
import { ProjectsAddPage } from './projects-add/projects-add';



@NgModule({
  declarations: [
    ProjectListPage,
    ProjectSearchPage,
    ProjectsAddPage
  ],
  entryComponents: [
    ProjectListPage,
    ProjectSearchPage,
    ProjectsAddPage
  ],
  imports: [
    IonicModule
  ],
})
export class ProjectModule { }
