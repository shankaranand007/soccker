import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, Toast, Keyboard } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Deeplinks } from '@ionic-native/deeplinks';
import { OAuthService } from 'angular-oauth2-oidc';
import * as OktaAuth from '@okta/okta-auth-js';

// import { DeeplinksPage } from '../pages/demo-module/deeplinks/deeplinks';
import { Endpoints } from '../providers/settings/endpoints';
import { LoginPage } from '../pages/auth-module/login/login';
import { NetworkProvider } from '../providers/network/network';
import { NotificationProvider } from '../providers/notification/notification';
import { Request } from '../providers/request/request';
import { Settings } from '../providers/settings/settings';
import { Spinner } from '../providers/spinner/spinner';
import { State } from '../providers/state/state';
import { StorageProvider } from '../providers/storage/storage';
import { SettingsPage } from '../pages/menu-module/settings/settings';
import { HelpPage } from '../pages/menu-module/help/help';
import { AboutPage } from '../pages/menu-module/about/about';
import { LockScreenPage } from '../pages/auth-module/lock-screen/lock-screen';
import { AppBroadcast } from '../providers/app-broadcast/app-broadcast';
import { DemoPage } from '../pages/demo-module/demo/form';
import { SubTabPage } from '../pages/home-module/sub-tab/sub-tab';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;
  public rootPage: any=LoginPage;
  public user: any = {};
  public pages: Array<{ title: string, component: any, icon: string }>;
  public userPhotoUrl;
  public toast: Toast;
  deepLinkState: any = {};

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public oauthService: OAuthService,
    public storage: StorageProvider,
    public notificationProvider: NotificationProvider,
    public state: State,
    public request: Request,
    public networkProvider: NetworkProvider,
    public toastController: ToastController,
    // public deeplinks: Deeplinks,
    public keyboard: Keyboard,
    public spinner: Spinner,
    public appBroadcast: AppBroadcast
  ) {
    this.initSideMenu();
    this.keyboardFix();
    // this.setOauthCredentials();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initNetworkEvents();
      this.validateUser();
    });
  }

  private initSideMenu() {
    this.pages = [
      { title: 'Home', component: SubTabPage, icon: 'icon-home' },
      { title: 'Demo', component: DemoPage, icon: 'icon-design' },
      { title: 'Settings', component: SettingsPage, icon: 'icon-settings' },
      { title: 'Help', component: HelpPage, icon: 'icon-help' },
      { title: 'App Info', component: AboutPage, icon: 'icon-details' },
      { title: 'Logout', component: LoginPage, icon: 'icon-logout' },
    ];

    this.appBroadcast.userData.subscribe((userInfo: any) => {
      if (!userInfo) {
        return;
      }
      this.user = userInfo;
      this.userPhotoUrl = this.request.getImageUrl(Endpoints.uri.user.photo, [this.user.Id]);
    });
  }

  private setOauthCredentials() {
    this.oauthService.redirectUri = Settings.EnvValue.oktaCredentials.redirectUri;
    this.oauthService.clientId = Settings.EnvValue.oktaCredentials.clientId;
    this.oauthService.scope = Settings.EnvValue.oktaCredentials.scope;
    this.oauthService.issuer = Settings.EnvValue.oktaCredentials.issuer;
    this.oauthService.requireHttps = Settings.EnvValue.oktaCredentials.requireHttps;
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.initDeeplinks();
    });
  }

  private initDeeplinks() {
 
  }

  setDeeplinkState(page, data = {}) {
    if (this.user) {
      this.deepLinkState = {
        page: page,
        data: data
      };
    } else {
      this.deepLinkState = {
        page: LoginPage,
        data: data
      };
    }

    this.state.set(this.state.data.deeplinks, this.deepLinkState)
    this.nav.setRoot(this.deepLinkState.page, this.deepLinkState.data);
  }

  private nagivateTo(page, hard: Boolean = false) {
    if (this.deepLinkState && this.deepLinkState.page) {
      if (hard) {
        return this.nav.setRoot(page, {
          url: this.deepLinkState.page,
          param: this.deepLinkState.data
        });
      }
      return this.nav.setRoot(this.deepLinkState.page, this.deepLinkState.data);
    }
    return this.nav.setRoot(page);
  }

  openPage(page) {
    if (page.component.name === 'LoginPage') {
      this.clearStorage();
    }
    this.nav.setRoot(page.component);
  }

  private async clearStorage() {
    this.storage.removeAll();
    localStorage.clear();
    sessionStorage.clear();
    this.state.removeAll();
  }

  private initNetworkEvents() {
    this.networkProvider.initializeNetworkEvents();
    this.checkNetwork();
  }

  private async validateUser() {
    try {

      this.spinner.show();
      let isLogin = await this.login();
      this.spinner.hide();

      this.silentTokenRefresh();

      if (!isLogin) {
        throw new Error('Login data not found redirect to Login Page');
      }

      this.user = await this.storage.get(this.storage.data.userInfo);

      let istouchid = <Boolean>await this.storage.get(this.storage.data.isTouchid);

      if (Settings.isOktaRequired) {
        if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
          return;
        }
      }

      if (this.user) {
        this.initNotification();
        this.setUserInfo();
        this.getUserPhotoUri();
        this.redirectByTouchID(istouchid);
      }
    } catch (err) {
      this.clearStorage();
      this.rootPage = LoginPage;
    }
  }


  private silentTokenRefresh() {
    setInterval(() => {
      this.login(true);
    }, Settings.EnvValue.loginInterval);
  }

  async login(redirectOnFail: boolean = false) {

    try {

      let username = await this.storage.get(this.storage.data.username);
      let password = await this.storage.get(this.storage.data.password);

      if (!Settings.isOktaRequired) {
        return true
      }

      if (!username || !password) {
        return false;
      }

      await this.oauthService.loadDiscoveryDocument()
      await this.oauthService.tryLogin();

      let nonce = await this.oauthService.createAndSaveNonce();

      const authClient = new OktaAuth({
        clientId: this.oauthService.clientId,
        redirectUri: this.oauthService.redirectUri,
        url: this.oauthService.issuer,
        issuer: this.oauthService.issuer,
        tokenManager: { storage: 'localStorage' }

      });

      let signInresponse = await authClient.signIn({
        username: username,
        password: password
      });

      if (signInresponse.status === 'SUCCESS') {
        return await this.ValidateToken(authClient, nonce, signInresponse);
      }

      if (signInresponse.status == "MFA_REQUIRED") {
        let answer = await this.storage.get(this.storage.data.MFAAnswer)

        let verifyResponse = await signInresponse.verify({
          answer: answer
        });

        return await this.ValidateToken(authClient, nonce, verifyResponse);
      }

      return false;

    } catch (err) {
      if (!redirectOnFail) {
        return false;
      }

      this.clearStorage();

      this.toastController.create({
        message: `Token Refreshing failed, Login in again`,
        duration: 5000,
        position: 'bottom'
      }).present();

      this.nav.setRoot(LoginPage);
    }
  }

  private async ValidateToken(authClient: any, nonce: string, response: any) {
    let tokens = await authClient.token.getWithoutPrompt({
      nonce: nonce,
      responseType: ['id_token', 'token'],
      sessionToken: response.sessionToken,
      scopes: this.oauthService.scope.split(' ')
    });
    const idToken = tokens[0].idToken;
    const accessToken = tokens[1].accessToken;
    const keyValuePair = `#id_token=${encodeURIComponent(idToken)}&access_token=${encodeURIComponent(accessToken)}`;
    this.oauthService.tryLogin({
      customHashFragment: keyValuePair,
      disableOAuth2StateCheck: true
    });
    await this.storage.set(this.storage.data.idToken, tokens[0].idToken);
    await this.storage.set(this.storage.data.accessToken, tokens[1].accessToken);
    return true;
  }

  private redirectByTouchID(istouchid) {
    if (!istouchid) {
      return this.nagivateTo(SubTabPage);
    }

    this.nagivateTo(LockScreenPage, true);
  }

  private getUserPhotoUri() {
    this.userPhotoUrl = this.request.getImageUrl(Endpoints.uri.user.photo, [this.user.Id]);
  }

  private setUserInfo() {
    this.state.set(this.state.data.userInfo, this.user)
  }

  private initNotification() {
    this.notificationProvider.pushInit(this);
  }

  private checkNetwork() {
    this.appBroadcast.checkNetwork.subscribe((data: any) => {
      if (data.error && data.error.status === 599 && data.type === 'iff_network') {
        this.toast = this.toastController.create({
          message: `You're not connected to Iff network.Please connect and try again`,
          duration: 10000,
          position: 'bottom'
        });
        this.toast.present();
      }

      if (data && data.type === 'internet_offline') {
        this.toast = this.toastController.create({
          message: `There may be a problem in your internet connection. Please check and try again`,
          duration: 30000000,
          position: 'bottom'
        });
        this.toast.present();
      }

      if (data && data.type === 'internet_online') {
        try {
          this.toast.dismissAll();
        } catch (error) { }
      }
    });

  }

  private keyboardFix() {
    window.addEventListener('keyboardDidShow', () => {
      document.activeElement.scrollIntoView(false);
      var elements = document.getElementsByClassName("scroll-content");
      for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.add("overflow-scrolling-auto");
        // elements[i].classList.remove("overflow-scrolling-touch");
        elements[i].addEventListener('scroll', () => {
          if (this.keyboard.isOpen()) {
            var InputTag = document.activeElement;
            //Adding Focus out event to prevent issue when the user switch between multiple input or text area
            InputTag.addEventListener('focusout', () => {
              if (InputTag.classList.contains("hide_visibility")) {
                InputTag.classList.add("hide_visibility");
              }
            });
            var divOffset = this.offset(InputTag);
            if (divOffset.top < 60 && !InputTag.classList.contains("hide_visibility")) {
              InputTag.classList.add("hide_visibility");
            } else if (divOffset.top > 60 && InputTag.classList.contains("hide_visibility")) {
              InputTag.classList.remove("hide_visibility");
            }
          }
        });
      }
    });
    window.addEventListener('keyboardDidHide', () => {
      var elements = document.getElementsByClassName("scroll-content");
      for (var i = 0, length = elements.length; i < length; i++) {
        // elements[i].classList.add("overflow-scrolling-touch");
        elements[i].classList.remove("overflow-scrolling-auto");
        elements[i].removeEventListener('scroll', () => {  });
      }
    });
  }

  private offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}

