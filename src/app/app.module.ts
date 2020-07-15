import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LottieSplashScreen} from '@ionic-native/lottie-splash-screen/ngx'
import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var firebaseConfig = {
  apiKey: "AIzaSyAz1QvzLwKdLHTipHY2bQ7i_OQdoVgMeAg",
  authDomain: "webapp-45ab1.firebaseapp.com",
  databaseURL: "https://webapp-45ab1.firebaseio.com",
  projectId: "webapp-45ab1",
  storageBucket: "webapp-45ab1.appspot.com",
  messagingSenderId: "935596321695",
  appId: "1:935596321695:web:2c78f33b8096d767eaebaa"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule ,
    FormsModule,],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, LottieSplashScreen
  ],
  bootstrap: [AppComponent] 
})
export class AppModule {}
