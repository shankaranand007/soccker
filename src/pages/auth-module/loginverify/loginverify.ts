import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { StorageProvider } from './../../../providers/storage/storage';
import { Spinner } from './../../../providers/spinner/spinner';

@Component({
  selector: 'page-loginverify',
  templateUrl: 'loginverify.html',
})

export class LoginverifyPage {

  responsel: any;
  answer: string;
  authClient: any;
  nonce: any;
  constructor(
    private navParams: NavParams,
    private oauthService: OAuthService,
    private spinner: Spinner,
    private storage: StorageProvider) {

    if (this.navParams.data.mfa && this.navParams.data.mfa.factors.length > 0) {
      this.responsel = this.navParams.data.mfa.factors.find(function (factor) {
        return factor.provider === 'OKTA' && factor.factorType === 'question';
      });
      if (this.navParams.data.authClient) {
        this.authClient = this.navParams.data.authClient;
      }
      if (this.navParams.data.nonce) {
        this.nonce = this.navParams.data.nonce;
      }
    }
  }

  login() {
    try {

      this.spinner.show();
      this.responsel.verify({
        answer: this.answer
      }).then(data => {
        this.authClient.token.getWithoutPrompt({
          clientId: this.oauthService.clientId,
          responseType: ['id_token', 'token'],
          scopes: ['openid', 'profile', 'email'],
          sessionToken: data.sessionToken,
          nonce: this.nonce
        }).then(async (tokens) => {
          const idToken = tokens[0].idToken;
          const accessToken = tokens[1].accessToken;
          //this.appData.appState.set(this.appData.appState.stateId.email,data.user.profile.login);
          const keyValuePair = `#id_token=${encodeURIComponent(idToken)}&access_token=${encodeURIComponent(accessToken)}`;
          this.oauthService.tryLogin({
            customHashFragment: keyValuePair,
            disableOAuth2StateCheck: true
          });

          await this.storage.set(this.storage.data.idToken, tokens[0].idToken);
          await this.storage.set(this.storage.data.accessToken, tokens[1].accessToken)
          await this.storage.set(this.storage.data.MFAAnswer, this.answer)

        }).fail(() => {
          this.spinner.hide();
        });
      }).fail(() => {
        this.spinner.hide();
      });
    } catch (err) {
      this.spinner.hide();
    }
  }
}

