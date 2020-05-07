import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthService } from './../auth.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Router, NavigationEnd } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-machine-location',
  templateUrl: './machine-location.page.html',
  styleUrls: ['./machine-location.page.scss'],
})
export class MachineLocationPage implements OnInit {
  OTP: string = '';
  data: any;
  lat;
  lng;
  machines;
  errorMsg = false;
  constructor(private router: Router, private service: AuthService, private ngxService: NgxUiLoaderService,
              private launchNavigator: LaunchNavigator, private geolocation: Geolocation) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }
  ngOnInit() {
    this.ngxService.start();
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
            if(this.lat) {
    this.machineNearByMe();
            }
            }, er => {
              // alert("error getting location")
              alert('Can not retrieve Location');
            }).catch((error) => {
            // alert('Error getting location'+JSON.stringify(error));
            alert('Error getting location - ' + JSON.stringify(error));
            });
  }
  machineNearByMe() {
    const reqBody = {latitude: this.lat, longitude: this.lng};
    console.log('req', reqBody);
    this.service.machinNearBy(reqBody).subscribe(
      (res: any) => {
        console.log('res', res);
        this.machines = res.data;
        this.ngxService.stop();
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
 const distance = [latLong.latitude, latLong.longitude]
 this.launchNavigator.navigate(distance, options)
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
  }

}
