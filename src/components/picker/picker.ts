import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalComponent } from '../modal/modal';

@Component({
  selector: 'picker',
  templateUrl: 'picker.html'
})
export class PickerComponent {

  @Input('list') list: any = [];
  @Input('selectedList') selectedList: any = [];
  @Input('extras') extras: any = {};

  constructor(private modalController: ModalController) {
  }

  openModal() {

    let test = this.modalController.create(ModalComponent, {
      list: this.list,
      selected: this.selectedList,
      extras: this.extras
    })
    test.onDidDismiss(selectedList => {

      if (selectedList === 'cancel') {
        return;
      }

      this.selectedList = selectedList;
    });

    test.present();
  }

  remove(removeItem) {
    for (let item in this.selectedList) {
      if (this.selectedList[item].id === removeItem.id) {
        delete this.selectedList[item];
      }
    }

    //remove empty elements from array
    this.selectedList = this.selectedList.filter(function (el) {
      return el != null;
    });
  }


}
