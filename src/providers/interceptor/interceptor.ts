import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppBroadcast } from '../app-broadcast/app-broadcast';
import { Spinner } from '../spinner/spinner';
// import { appConfig } from '../../app.config';
// import { appConfig } from '../../../assets/env.prod';
import {appConfig } from '../../environments/environment';
import { ToastController } from 'ionic-angular';

@Injectable()
export class InterceptorProvider implements HttpInterceptor {

  constructor(private appBroadcast: AppBroadcast, private loading: Spinner,private toastCtrl: ToastController, ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;
    const requestUrl = req.url;
  //   return next.handle(request).pipe(

  //     catchError(error => {
  //       this.appBroadcast.doCheckNetwork({error: error, type: 'iff_network'});
  //       this.loading.hide();
  //       return Observable.throw(error);
  //     })

  //   );

  // }
  
  // if (!requestUrl.includes('.json')) {
      // const token = this.appService.userData.access_token;
      // if (!requestUrl.includes('/login') && !requestUrl.includes('/logo') && !requestUrl.includes('/forgot-password')) {
      //     request = req.clone({
      //         url: appConfig.API_BASE_URL + req.url,
      //         // setHeaders: {
      //         //     'Authorization': 'Bearer ' + token,
      //         // }
      //     });
      // } else {
      //     if (requestUrl.includes('/logo')) {
      //         request = req.clone({
      //             url: appConfig.API_BASE_URL + req.url,
      //             // setHeaders: {
      //             //     'Authorization': 'Bearer ' + token,
      //             // },
      //             responseType: 'text',
      //         });
      //     } else {
      //         request = req.clone({
      //             url: appConfig.API_BASE_URL + req.url,
      //             setHeaders: {}
      //         });
      //     }
      // }
  // }

  request = req.clone({
    url: appConfig.API_BASE_URL + req.url,
    setHeaders: {}
});
console.log(request,"intercepter")
  return next
      .handle(request)
      .map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              // this.appService.resetBusy();
              this.loading.show();
          }
          return event;
      })
      .catch((err: any) => {
          // this.appService.resetBusy();
          if (err instanceof HttpErrorResponse) {
              if (err.status === 0) {
                let errToastr = this.toastCtrl.create({
                            message: 'There was a problem while logging into app. Please try again',
                            duration: 4000,
                            position: 'top',
                            cssClass: 'customToaster-error'
                          });
                          errToastr.present(errToastr);
              } else {
                  if (err.status >= 500) {
                      // this.appService.showToasterErrMsg(appConst.ERROR_MSG.INTERVAL_SERVER_ERROR);
                  } else {
                      if ((err.error)
                          && (!err.error.error_description)) {
                          //let errMsg = appConst.ERROR_MSG[err.error];
                          let errMsg = err.error.errors[0];
                          if (!errMsg) {
                              // errMsg = appConst.ERROR_MSG.BAD_REQ;
                          }
                          // this.appService.showToasterErrMsg(errMsg);
                      }
                  }
              }
              return Observable.throw(err);
          }
      });
}
}
