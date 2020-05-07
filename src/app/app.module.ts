import { HomePage } from './home/home.page';
import { SignUpPage } from './sign-up/sign-up.page';
import { LoginPage } from './login/login.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatMenuModule} from '@angular/material/menu';
import { CallNumber } from '@ionic-native/call-number/ngx';
@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    SignUpPage,
    HomePage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    ReactiveFormsModule,
    MaterialModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [
    Geolocation,
    CallNumber,
    InAppBrowser,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    LaunchNavigator,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
