import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-picker-modal',
  templateUrl: 'picker-modal.html',
})

export class PickerModalPage {

  public list;
  public selectedItems;
  public maxSelect: number = 4; // -1 removes restrictions
  public extras = {
    title: 'People',
    maxSelect: 4,
    key: 'people'
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    this.setData();
  }

  private setData() {
    this.list = [
      {
        id: 1,
        name: 'Thamarai',
        checked: false
      },
      {
        id: 2,
        name: 'Siva',
        checked: false
      },
      {
        id: 3,
        name: 'Sathish',
        checked: false
      },
      {
        id: 4,
        name: 'Sangeetha',
        checked: false
      },
      {
        id: 5,
        name: 'Ashok',
        checked: false
      },
      {
        id: 6,
        name: 'Kutti mani',
        checked: false
      }
    ];
    this.selectedItems = [{
      id: 1,
      name: 'Thamarai',
      checked: true
    }]
  }

  pop() {
    this.navCtrl.pop();
  }

}
