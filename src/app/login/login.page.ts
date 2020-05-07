import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormBuilder, FormGroup, FormArray, ValidatorFn, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

declare var SMSReceive: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  OTP: string = '';
  showOTPInput: boolean = false;
  email;
  loaderToShow: any;
  mobile;
  manualOtp = [];
  otpNo;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s';
  loginForm: FormGroup;
  nextButton = true;

  constructor(private toastCtrl: ToastController, private fb: FormBuilder, public loadingController: LoadingController,
              private router: Router, private service: AuthService, private ngxService: NgxUiLoaderService,
              private navCtrl: NavController, private inAppBrowser: InAppBrowser) {

  }
  ngOnInit() {
    // this.showLoader()
    // this.hideLoader()
this.loginValidation();
  }
  loginValidation() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]
      ],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('[6-9]\\d{9}'),
          Validators.maxLength(12),
          Validators.minLength(12)
        ]
      ],
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

  next() {
    // this.ngxService.start();
    console.log('formvalue-', this.loginForm);
    const request1 = {mobile_no: this.loginForm.value.mobile.toString(), name: this.loginForm.value.email}
    console.log('hahah', request1);

    console.log('user register', request1);
    this.service.signUp(request1).subscribe(
      (res: any) => {
        console.log('res', res);
        const response = res.otpno;
        localStorage.setItem('Token', JSON.stringify(res));
        // this.otpNo = response.split('');
        console.log('tosee otp', this.otpNo);
        this.showOTPInput = true;
      }, error => {
        console.log('error', error.error.msg);
        this.presentToast(error.error.msg, false, 'top', 1500);
      }
      );
    // let request = {mobile_no: this.loginForm.value.mobile.toString()}
    // console.log('user data', request);
    // this.service.otp(request).subscribe(
    //   (res: any) =>{
    //     console.log('res', res);
    //   }, error =>{
    //     console.log('error', error);
    //   }
    //   );

    this.start();
  }

  start() {
    SMSReceive.startWatch(
      () => {
        console.log('watch started');
        this.ngxService.stop();
        document.addEventListener('onSMSArrive', (e: any) => {
          console.log('onSMSArrive()');
          var IncomingSMS = e.data;
          console.log('sms.address:' + IncomingSMS.address);
          console.log('sms.body:' + IncomingSMS.body);
          // this.OTP = IncomingSMS.body;
          /* Debug received SMS content (JSON) */
          console.log(JSON.stringify(IncomingSMS));
          this.processSMS(IncomingSMS);

        });
      },
      () => { console.log('watch start failed')}
    )
  }

  stop() {
    SMSReceive.stopWatch(
      () => { console.log('watch stopped')},
      () => { console.log('watch stop failed')}
    );
  }

  processSMS(data) {
    // Check SMS for a specific string sequence to identify it is you SMS
    // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
    // In this case, I am keeping the first 6 letters as OTP
    console.log('processSMS');
    const message = data.body;
    if (message) {

      this.OTP = data.body.slice(0, 6);
      console.log('otp', this.OTP);
      this.OTPmessage = 'OTP received. Proceed to register'
      this.stop();
    }
  }

  register() {

    if (this.OTP != '' || JSON.stringify(this.otpNo) === JSON.stringify(this.manualOtp)) {
      this.presentToast('You are successfully logged in', false, 'top', 1500);
      this.navCtrl.navigateRoot('/home');
    }
    else {
      this.presentToast('Your OTP is not valid', false, 'bottom', 1500);
    }
  }
  keytab( el, event, prev) {
    console.log('key', event.key);
    if (event.key == 'Backspace') {
      console.log("got it !")
      this.manualOtp.pop();
      prev.setFocus()
   } else {
    console.log('event', JSON.stringify(this.manualOtp), this.manualOtp);
    el.setFocus();
    if (this.manualOtp.length <= 5) {
    this.manualOtp.push(event.target.value);
  }

}
}
  // showLoader() {
  //   this.loaderToShow = this.loadingController.create({
  //   }).then((res) => {
  //     res.present();

  //     // res.onDidDismiss().then((dis) => {
  //     //   console.log('Loading dismissed!');
  //     // });
  //   });
  //   this.hideLoader();
  // }

  // hideLoader() {
  //     this.loadingController.dismiss();
  // }
  goToLogin() {
    this.router.navigate(['sign-up']);
  }
  checkbox() {
    console.log('formvalue', this.loginForm.valid);
    if (this.nextButton == true) {
      this.nextButton = false;
    } else if (this.nextButton == false) {
      this.nextButton = true;
    }
  }
  termCondition() {
    this.inAppBrowser.create('http://femikare.com/term.html');
  }
}

