import { AuthService } from './../auth.service';
import { Component, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router, NavigationEnd } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  OTP: string = '';
  data: any;
  lat;
  lng;
  machines;
  errorMsg = false;
  machineId;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  routerOutlet;
  subscription;
  // @ViewChild(IonRouterOutlet, {static: true}) routerOutlets: IonRouterOutlet;

  constructor(private platform: Platform, private barcodeScanner: BarcodeScanner, private router: Router, private service: AuthService,
              private launchNavigator: LaunchNavigator, private callNumber: CallNumber, private inAppBrowser: InAppBrowser,
              private geolocation: Geolocation, private toastCtrl: ToastController) {

  }
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
        navigator['app'].exitApp();
    });
}

ionViewWillLeave() {
    this.subscription.unsubscribe();
}
  ngOnInit() {
    this.geolocation.getCurrentPosition(
      {maximumAge: 1000, timeout: 5000,
       enableHighAccuracy: true }
      ).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            // alert("r succ"+resp.coords.latitude)
            // alert(JSON.stringify( resp.coords));
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            console.log('latt', this.lat, this.lng);
            }, er => {
              // alert("error getting location")
              alert('Can not retrieve Location');
            }).catch((error) => {
            // alert('Error getting location'+JSON.stringify(error));
            alert('Error getting location - ' + JSON.stringify(error));
            });
  }
  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastCtrl.create({
      message: message,
      // showCloseButton: show_button,
      position: position,
      duration: duration
    });
    toast.present();
  }

  machineNearByMe() {
    const reqBody = {latitude: this.lat, longitude: this.lng};
    this.service.machinNearBy(reqBody).subscribe(
      (res: any) => {
        console.log('res', res);
        this.machines = res.data;
      }, error => {
        console.log('error', error.error);

      }
    );
  }
  map(latLong) {
 console.log('latt', latLong);
 const options: LaunchNavigatorOptions = {
      start: [this.lat, this.lng]
      // app: LaunchNavigator.APPS.UBER
    };
 const distance = [latLong.latitude, latLong.longitude];
 this.launchNavigator.navigate(distance, options)
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
  }
  scan() {
    // machine id :- 1E7596DF65827542
      console.log('machinid', this.machineId);
      console.log('sacanna');
      this.barcodeScanner.scan().then(barcodeData => {
        console.log('Barcode data', barcodeData);
        // this.data = barcodeData.text;
        // console.log(this.data);
        this.data = barcodeData.text;
        const req = {machine_id: this.data};
        this.service.machinId(req).subscribe(
          (res: any) => {
            console.log('machineStatus', res);
            if ( res.presence == 'offline' ) {
              console.log('hahahah');
              this.errorMsg = true;
            } else if(res.presence == 'online') {
              localStorage.setItem('machineId', JSON.stringify(this.data));
              this.router.navigate(['product']);
            }
          }, error => {
            console.log('errpr', error.error);
          }
        );
      }).catch(err => {
        console.log('Error', err);
      });
    }

  scanManual() {
      console.log('manual');
      const req = {machine_id: this.machineId};
      if ( this.machineId) {
        this.service.machinId(req).subscribe(
          (res: any) => {
            console.log('machineStatus', res);
            if ( res.msg == 'offline' ) {
              console.log('hahahah');
              this.errorMsg = true;
            } else if (res.presence == 'online') {
              localStorage.setItem('machineId', JSON.stringify(this.machineId));
              this.router.navigate(['product']);
            }
          }, error => {
            console.log('errpr', error.error.msg);
            this.presentToast(error.error.msg, false, 'top', 1500);
          }
        );
      } else {
        this.presentToast('Please enter machine Id', false, 'top', 1500);
      }
  }
  goToLocation() {
    this.router.navigate(['/machine-location']);
  }
  profile() {
    this.router.navigate(['/profile']);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/sign-up']);
  }
  call() {
    this.callNumber.callNumber('18001010101', true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
  term() {
    this.inAppBrowser.create('http://femikare.com/term.html');
  }
  privacy() {
    this.inAppBrowser.create('http://femikare.com/privacy.html');
  }
  return() {
    this.inAppBrowser.create('http://femikare.com/return.html');
  }
}
