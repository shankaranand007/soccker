import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PickerModalPage } from '../picker-modal/picker-modal';
import { EventsPage } from '../events/events';
import { InfiniteScrollerPage } from '../infinite-scroller/infinite-scroller';
import { ChartPage } from '../chart/chart';
import { AccordionPage } from '../accordion/accordion';
import { SharePage } from '../share/share';
import { SpeechRecognitionPage } from '../speech-recognition/speech-recognition';

@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})

export class DemoPage {

  public lists = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setLists();
  }

  private setLists() {
    this.lists = [
      {
        title: 'Picker Modal',
        page: PickerModalPage,
      },
      {
        title: 'Events',
        page: EventsPage,
      },
      {
        title: 'Infinite Scroller',
        page: InfiniteScrollerPage,
      },
      {
        title: 'Charts',
        page: ChartPage,
      },
      {
        title: 'Accordion',
        page: AccordionPage,
      },
      {
        title: 'Share Message',
        page: SharePage,
      },
      {
        title: 'Speech Recognition',
        page: SpeechRecognitionPage,
      },
    ]
  }

  openPage(data) {
    this.navCtrl.push(data.page, { data: data })
  }

}
