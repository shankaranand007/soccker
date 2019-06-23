import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})

export class EventsPage {

  public lists = [
    {
      title: "item 1",
    }, {
      title: "item 2",
    }, {
      title: "item 3",
    }, {
      title: "item 4",
    },
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastController: ToastController
    ) {
  }

  pressEvent(item){
    let toast = this.toastController.create({
      message: "Pressed: " + item.title,
      duration: 1000,
      position: 'bottom'
    });
    toast.present(toast);
  }

  tapEvent(item){
    let toast = this.toastController.create({
      message: "Tapped: " + item.title,
      duration: 1000,
      position: 'bottom'
    });
    toast.present(toast);
  }

  public pop() {
    this.navCtrl.pop();
  }
}
