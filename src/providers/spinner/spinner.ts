import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class Spinner {

  loader: any;
  constructor(private loading: LoadingController, ) {
  }

  show() {
    if (!this.loader) {
      this.loader = this.loading.create({
        spinner: 'hide',
        content: `
        <div class="loading-custom-spinner-container">
        <img src="../../assets/imgs/loader.gif" />
        </div>`,
      });
      this.loader.present();
    }

    setTimeout(() => {
      if (this.loader) {
        this.loader.dismissAll();
        this.loader = null;
      }
    }, 35000);
  }

  showforce() {
    if (this.loader) {
      this.loader.dismissAll();
      this.loader = null;
    }

    this.loader = this.loading.create({
      spinner: 'hide',
      content: `
      <div class="loading-custom-spinner-container">
      <img src="../../assets/imgs/loader.gif" />
      </div>
     `,
    });
    this.loader.present();

    setTimeout(() => {
      if (this.loader) {
        this.loader.dismissAll();
        this.loader = null;
      }
    }, 35000);
  }

  hide() {
    setTimeout(() => {
      if (this.loader) {
        this.loader.dismissAll();
        this.loader = null;
      }
    }, 300);
  }
}
