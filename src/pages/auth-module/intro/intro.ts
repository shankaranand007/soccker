import { Component } from "@angular/core";
import { NavController, ToastController } from 'ionic-angular';
import { forkJoin } from 'rxjs/observable/forkJoin';

import { StorageProvider } from "./../../../providers/storage/storage";
import { Spinner } from "./../../../providers/spinner/spinner";
import { NotificationProvider } from "./../../../providers/notification/notification";
import { Request } from './../../../providers/request/request';
import { State } from './../../../providers/state/state';
import { Endpoints } from './../../../providers/settings/endpoints';
import { LoginPage } from './../login/login';
import { AppBroadcast } from '../../../providers/app-broadcast/app-broadcast';
import { SubTabPage } from "../../home-module/sub-tab/sub-tab";
import { appConfig } from '../../../environments/environment';

@Component({
  selector: "page-intro",
  templateUrl: "intro.html"
})

export class IntroPage {

  public intros: any[];
  public enableCompleteBtn = false;
  istouchid: any;

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private notificationProvider: NotificationProvider,
    private spinner: Spinner,
    private request: Request,
    private state: State,
    private storage: StorageProvider,
    private appBroadcast: AppBroadcast
  ) {
    this.intros = [
      {
        title: "Create Customer Review Session",
        description:
          "<b>Long press</b> on the first fragrance and single press on following fragrances to select for creating <b>Customer Review Session</b>",
        image: "assets/imgs/skipintro1.png",
        skipText: "Skip"
      },

    ];
  }

  // ionViewDidLoad() {
  //   try {

  //     this.spinner.show();
  //     let userID = this.state.get(this.state.data.userid);

  //     if (!userID) {
  //       userID = this.request.getId();
  //     }

  //     if (userID) {
  //       this.notificationProvider.pushregister();
  //       forkJoin(
  //         this.request.get(Endpoints.uri.user.info, [userID]),
  //         this.request.get(Endpoints.uri.user.preferences, [userID])
  //       ).subscribe((result: any) => {
  //         if (result[0] != null && result[1] != null) {
  //           const user = {
  //             Id: result[0]['UserId'],
  //             DisplayName: result[0]['DisplayName'],
  //             Email: result[0]['EmailId'],
  //             OfficeLocation: result[0]['OfficeLocation'],
  //             RegionName: result[0]['RegionName'],
  //             Creativecenter: result[1].length ? result[1][0]['CREATIVECENTER'] : '',
  //             Creativecenterid: result[1].length ? result[1][0]['CREATIVECENTERID'] : '',
  //             CreativeCenterCode: result[1].length ? result[1][0]['CreativeCenterCode'] : '',
  //             CurrencyCode: result[1].length ? result[1][0]['CurrencyCode'] : '',
  //             Currency: result[1].length ? result[1][0]['Currency'] : '',

  //           };
  //           this.storage.set(this.storage.data.userInfo, user);
  //           this.state.set(this.state.data.userInfo, user);
  //           this.enableCompleteBtn = true;
  //           this.appBroadcast.userData.next(user);
  //           this.spinner.hide();
  //         }

  //       }, () => {
  //         let errToastr = this.toastCtrl.create({
  //           message: 'There was a problem while logging into app. Please try again',
  //           duration: 4000,
  //           position: 'top',
  //           cssClass: 'customToaster-error'
  //         });
  //         errToastr.present(errToastr);

  //         this.storage.removeAll();
  //         localStorage.clear();
  //         sessionStorage.clear();
  //         this.navCtrl.setRoot(LoginPage);
  //         this.spinner.hide();
  //       });
  //     }
  //     else {
  //       let errToastr = this.toastCtrl.create({
  //         message: 'There was a problem while logging into app. Please try again',
  //         duration: 4000,
  //         position: 'top',
  //         cssClass: 'customToaster-error'
  //       });
  //       errToastr.present(errToastr);
  //       this.spinner.hide();
  //       this.storage.removeAll();
  //       localStorage.clear();
  //       sessionStorage.clear();
  //       this.navCtrl.setRoot(LoginPage);

  //     }
  //   } catch (error) {
  //   }

  // }
  public goToLogin() {
    window.location.href = "http://localhost:8080";
  }
  public async skipLogin() {

    let user = await this.storage.get(this.storage.data.userInfo);
    if (user) {
      this.navCtrl.setRoot(SubTabPage);
    }

  }

}
