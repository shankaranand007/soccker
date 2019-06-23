import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AboutPage } from './about/about';
import { HelpPage } from './help/help';
import { HelpDetailPage } from './help-detail/help-detail';
import { SettingsPage } from './settings/settings';

@NgModule({
  declarations: [
    AboutPage,
    HelpPage,
    HelpDetailPage,
    SettingsPage
  ],
  entryComponents: [
    AboutPage,
    HelpPage,
    HelpDetailPage,
    SettingsPage
  ],
  imports: [
    IonicModule
  ],
})
export class MenuModule { }
