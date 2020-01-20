import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';

import { IonicStorageModule } from '@ionic/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyAa1eqAbyKC5zsrHyiV4YZXSWZam-EcUBU',
  authDomain: 'ionic-angular-class.firebaseapp.com',
  databaseURL: 'https://ionic-angular-class.firebaseio.com',
  projectId: 'ionic-angular-class',
  storageBucket: 'ionic-angular-class.appspot.com',
  messagingSenderId: '987801580867',
  appId: '1:987801580867:web:8a6bc258099b18db64ebf6'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
