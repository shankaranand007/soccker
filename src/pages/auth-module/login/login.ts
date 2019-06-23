import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import * as OktaAuth from '@okta/okta-auth-js';
import { OAuthService } from 'angular-oauth2-oidc';

import { Spinner } from './../../../providers/spinner/spinner';
import { StorageProvider } from './../../../providers/storage/storage';
import { Settings } from './../../../providers/settings/settings';
import { State } from './../../../providers/state/state';
import { LoginService } from '../../../providers/service/login_service';
import { IntroPage } from '../intro/intro';
import { SignupPage } from '../signup/signup';
import { ResetPage } from '../reset/reset';
// import { LoginverifyPage } from '../loginverify/loginverify';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  @ViewChild('mobile') mobile: any;
  private username: string = "";
  private password: string = "";
  public type = 'password';
  public showPass = false;
  public error = '';
  public isTokenRequired = true;
  public login_values:any = {};
  private authClient: any;
  private nonce:any;
  public touchIDFailed: boolean = false;

  constructor(
    private navCtrl: NavController,
    private spinner: Spinner,
    private toastCtrl: ToastController,
    private login_serive:LoginService,
    private storage: StorageProvider,
    private state: State,
    private oauthService: OAuthService,
    private navParam: NavParams,
    private menuCtrl: MenuController
    ) {
    this.isTouchIDFailed();
    this.isTokenRequired = Settings.isOktaRequired;
  }

  isTouchIDFailed(){
    let isFailed = this.navParam.get('touchIDFailed');
    this.touchIDFailed = isFailed ? true: false; //if true then do not flush settings
  }

  ionViewDidLoad() {
    this.spinner.showforce();

    setTimeout(() => {
      this.mobile.setFocus();
    }, 3500);

    if (!Settings.isOktaRequired) {
      return this.spinner.hide();
    }

    this.spinner.hide();
    this.validateLogin();
  }
  public forgot(){
    this.navCtrl.push(ResetPage)
  }

  private async validateLogin() {

    try {
      this.oauthService.loadDiscoveryDocument().then(() => {
        this.oauthService.tryLogin();
      });
    } catch (err) {
      this.spinner.hide();
    }
  }
  signup(){
    this.navCtrl.push(SignupPage)
  }
  async login() {
    console.log(this.login_values)
    this.clearStorages();
    
    this.login_serive.login(this.login_values)
    .subscribe(data=>{
      console.log(data,"login page")
      if(data == 'Unauthorised'){
         let errToastr = this.toastCtrl.create({
          message: 'There was a problem while logging into app. Please try again',
          duration: 4000,
          position: 'top',
          cssClass: 'customToaster-error'
        });
        errToastr.present(errToastr);
      }else{
        this.navCtrl.push(IntroPage)
      }
    })
    // this.spinner.show();
    // this.navCtrl.push(IntroPage)
    // if (!Settings.isOktaRequired) {
    //   this.setUsername();
    //   this.navCtrl.push(IntroPage)
    //   return this.spinner.hide();
    // }

    // try {
    //   this.nonce = await this.oauthService.createAndSaveNonce();
    //   // this.authSignIn();
    // } catch (exp) {
    //   this.error = "There was a problem while logging into app. Please try again";
    //   this.spinner.hide();
    // }
    // this.spinner.hide();
  }

  private clearStorages() {
    this.storage.removeAll();
    localStorage.clear();
    sessionStorage.clear();
  }

  private setUsername() {
    this.state.set(this.state.data.userid,  this.username );
  }

  private async authSignIn() {
    this.setAuthClient();
    this.setUsername();

    try {
      let response = await this.authClient.signIn({
        username: this.username,
        password: this.password
      })

      await this.storage.set(this.storage.data.username, this.username);
      await this.storage.set(this.storage.data.password, this.password);

      this.processResponse(response);
    } catch (err) {
      this.addError(err);
    }
  }

  private setAuthClient() {

    this.authClient = new OktaAuth({
      clientId: this.oauthService.clientId,
      redirectUri: this.oauthService.redirectUri,
      url: this.oauthService.issuer,
      issuer: this.oauthService.issuer,
      tokenManager: { storage: 'localStorage' }
    });
  }

  private async processResponse(response) {
    // if (response.status !== 'SUCCESS') {
    //   if (response.status == "MFA_REQUIRED") {
    //     this.spinner.hide();
    //     this.navCtrl.push(LoginverifyPage, { mfa: response, authClient: this.authClient, nonce: this.nonce });
    //     return;
    //   }

    //   this.spinner.hide();
    //   this.error = "There was a problem while logging into app. Please try again";
    //   return;
    // }

    // try {
    //   let tokens = await this.authClient.token.getWithoutPrompt({
    //     nonce: this.nonce,
    //     responseType: ['id_token', 'token'],
    //     sessionToken: response.sessionToken,
    //     scopes: this.oauthService.scope.split(' ')
    //   })

    //   this.processTokens(tokens)
    //   this.nagivateTo(IntroPage);
    // } catch (err) {
    //   this.addError(err)
    // }

  }

  private processTokens(tokens) {
    const idToken = tokens[0].idToken;
    const accessToken = tokens[1].accessToken;
    const keyValuePair = `#id_token=${encodeURIComponent(idToken)}&access_token=${encodeURIComponent(accessToken)}`;
    this.oauthService.tryLogin({
      customHashFragment: keyValuePair,
      disableOAuth2StateCheck: true
    });

    this.storage.set(this.storage.data.idToken, tokens[0].idToken);
    this.storage.set(this.storage.data.accessToken, tokens[1].accessToken)
    this.spinner.hide();
  }

  private addError(err) {
    this.error = err.message;
    this.spinner.hide();
  }

  public showPassword() {
    this.showPass = !this.showPass;

    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeEnable(false)
  }

  ionViewDidLeave() {
    this.menuCtrl.swipeEnable(true)
  }

  private nagivateTo(page, hard: Boolean = false) {
    let deeplinks = this.state.get(this.state.data.deeplinks);

    if (deeplinks && deeplinks.page) {
      if (hard) {
        return this.navCtrl.setRoot(page, {
          url: deeplinks.page,
          param: deeplinks.data
        });
      }
      return this.navCtrl.setRoot(deeplinks.page, deeplinks.data);
    }

    return this.navCtrl.setRoot(page);
  }

}
