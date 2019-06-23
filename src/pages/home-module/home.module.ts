import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HomePage } from './home/home';
import { SubTabPage } from './sub-tab/sub-tab';


@NgModule({
  declarations: [
    SubTabPage,
    HomePage,
  ],
  entryComponents: [
    SubTabPage,
    HomePage,
  ],
  imports: [
    IonicModule
  ],
})
export class HomeModule { }
