import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { VendorPage } from './vendor/vendor';
import { VendorDetailsPage } from './vendor-details/vendor-details';
import { VendorSearchPage } from './vendor-search/vendor-search';
import { VendorsAddPage } from './vendors-add/vendors-add';

@NgModule({
  declarations: [
    VendorPage,
    VendorDetailsPage,
    VendorSearchPage,
    VendorsAddPage
  ],
  entryComponents: [
    VendorPage,
    VendorDetailsPage,
    VendorSearchPage,
    VendorsAddPage
  ],
  imports: [
    IonicModule
  ]
})
export class VendorModule { }
