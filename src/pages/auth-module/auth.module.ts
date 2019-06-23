import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { IntroPage } from './intro/intro';
import {SignupPage} from './signup/signup';
import {ResetPage} from './reset/reset';
import { LockScreenPage } from './lock-screen/lock-screen';
import { LoginPage } from './login/login';
import { LoginverifyPage } from './loginverify/loginverify';

@NgModule({
  declarations: [
    IntroPage,
    SignupPage,
    LockScreenPage,
    LoginPage,
    LoginverifyPage,
    ResetPage
  ],
  entryComponents: [
    IntroPage,
    SignupPage,
    LockScreenPage,
    LoginPage,
    ResetPage,
    LoginverifyPage],
  imports: [
    IonicModule
  ],
})
export class AuthModule { }
