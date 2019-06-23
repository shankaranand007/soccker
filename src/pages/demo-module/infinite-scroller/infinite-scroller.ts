import { Component } from '@angular/core';
import { NavController, NavParams, InfiniteScroll } from 'ionic-angular';

@Component({
  selector: 'page-infinite-scroller',
  templateUrl: 'infinite-scroller.html',
})

export class InfiniteScrollerPage {

  public lists = [];
  private count: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.addLists(20);
  }

  doInfinite(infiniteScroll: InfiniteScroll) {
    if (this.count >= 100) {
      infiniteScroll.enable(false);
      return;
    }

    setTimeout(() => {
      this.addLists(10);
      infiniteScroll.complete();
    }, 1000)

  }

  private addLists(add = 0) {
    let tmpCount = this.count;
    for (tmpCount = this.count; tmpCount < this.count + add; tmpCount++) {
      this.lists.push({
        title: 'Item ' + tmpCount
      })
    }

    this.count = tmpCount;
  }

  pop(){
    this.navCtrl.pop();
  }
}
