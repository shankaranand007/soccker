import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NotificationListPage } from './notification-list/notification-list';
import { NotificationSearchPage } from './notification-search/notification-search';




@NgModule({
  declarations: [
    NotificationListPage,
    NotificationSearchPage
  ],
  entryComponents: [
  NotificationListPage,
  NotificationSearchPage
  ],
  imports: [
    IonicModule
  ],
})
export class NotificationModule { }
