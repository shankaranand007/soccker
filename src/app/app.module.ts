import { BrowserModule } from '@angular/platform-browser';
import { Deeplinks } from '@ionic-native/deeplinks';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpBackend, HttpXhrBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule, Platform } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { Network } from '@ionic-native/network';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TouchID } from '@ionic-native/touch-id';
import { EmailComposer } from '@ionic-native/email-composer';
import { ChartsModule } from 'ng4-charts/ng4-charts';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SecureStorage } from '@ionic-native/secure-storage';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

import { MyApp } from './app.component';
import { NetworkProvider } from '../providers/network/network';
import { NotificationProvider } from '../providers/notification/notification';
import { Request } from '../providers/request/request';
import { Settings } from '../providers/settings/settings';
import { Spinner } from '../providers/spinner/spinner';
import { State } from '../providers/state/state';
import { StorageProvider } from '../providers/storage/storage';
import { LoginService } from '../providers/service/login_service';
import { TouchIdProvider } from '../providers/touch-id/touch-id';

import { ComponentsModule } from '../components/components.module';
import { AuthModule } from '../pages/auth-module/auth.module';
import { DemoModule } from '../pages/demo-module/demo.module';
import { HomeModule } from '../pages/home-module/home.module';
import { MenuModule } from '../pages/menu-module/menu.module';
import { VendorModule } from '../pages/vendor-module/vendor.module';
import { InterceptorProvider } from '../providers/interceptor/interceptor';
import { AppBroadcast } from '../providers/app-broadcast/app-broadcast';
import { EmployeeModule } from '../pages/employee-module/employee.module';
import { ProjectModule } from '../pages/project-module/project.module';
import { NotificationModule } from '../pages/notification-module/notification.module';
import { MockData } from '../providers/mock-data/mock-data';
import { from } from 'rxjs/observable/from';
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    AuthModule,
    DemoModule,
    HomeModule,
    EmployeeModule,
    MenuModule,
    VendorModule,
    ProjectModule,
    NotificationModule,
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      scrollAssist: true,    // Valid options appear to be [true, false]
      autoFocusAssist: false,  // Valid options appear to be ['instant', 'delay', false]
      inputBlurring: false,
    }),
    IonicStorageModule.forRoot(
      {
        name: '_mobiseed',
        driverOrder: ['localstorage']
      }),
    NativeHttpModule,
    ChartsModule,
    OAuthModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend] },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true },
    Request,
    Settings,
    State,
    TouchID,
    Network,
    Spinner,
    StorageProvider,
    LoginService,
    NotificationProvider,
    NetworkProvider,
    Deeplinks,
    TouchIdProvider,
    SocialSharing,
    EmailComposer,
    SecureStorage,
    AppBroadcast,
    SpeechRecognition,
    OpenNativeSettings,
    MockData
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
