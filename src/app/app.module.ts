import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailsPage } from '../pages/details/details';
import { MySpotsPage } from '../pages/my-spots/my-spots';
import { ReservePage } from '../pages/reserve/reserve';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthService } from '../services/auth.service';
import { MockDataService } from '../services/mock.data.service';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AccountPage } from '../pages/account/account';
import { HistoryPage } from '../pages/history/history';

import { AppConfig } from '../config/app.config';

import { InjectionToken } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { HttpModule } from '@angular/http';
import { MakeReservePage } from '../pages/make-reserve/make-reserve';


declare var process: any;

import { AddSpotPage } from '../pages/add-spot/add-spot';
import { ModalAutocompleteItems } from '../pages/modal-autocomplete-items/modal-autocomplete-items';

import { IonicStorageModule } from '@ionic/storage';

import {
GoogleMaps
} from '@ionic-native/google-maps';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MySpotsPage,
    ReservePage,
    DetailsPage,
    LoginPage,
    AccountPage,
    RegisterPage,
    HistoryPage,
    AddSpotPage,
    MakeReservePage,
    ModalAutocompleteItems
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: process.env['GOOGLE_MAP_API_KEY'],
      libraries: ["places"]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MySpotsPage,
    ReservePage,
    DetailsPage,
    LoginPage,
    AccountPage,
    RegisterPage,
    HistoryPage,
    AddSpotPage,
    MakeReservePage,
    ModalAutocompleteItems
  ],
  providers: [
    AppConfig,
    StatusBar,
    GoogleMaps,
    SplashScreen,
    Geolocation,
    AuthService,
    MockDataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
