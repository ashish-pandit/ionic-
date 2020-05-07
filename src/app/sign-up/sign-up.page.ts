import { Component, OnInit,ElementRef, Input, Directive } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
declare var SMSReceive: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {
  OTP: string = '';
  showOTPInput: boolean = false;
  email;
  loaderToShow: any;
  mobile;
  OTPmessage: string = '';
  loginForm: FormGroup;
  otpNo;
  manualOtp = [];
  isFocus: boolean = true;
  sendOtp = 'SEND OTP';
  maxtime;
  timer;
  hidevalue;
  resend = true;
  constructor(private toastCtrl: ToastController, private fb: FormBuilder, public loadingController: LoadingController,
              private router: Router, private service: AuthService, private ngxService: NgxUiLoaderService,
              private navCtrl: NavController) {

  }
  ngOnInit() {
  this.loginValidation();
  }
  loginValidation() {
    this.loginForm = this.fb.group({
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
    console.log('hahahha', this.loginForm.valid);
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
    this.maxtime = 20;
    this.resend = true;
    this.ngxService.start();
    const request1 = {mobile_no: this.loginForm.value.mobile.toString()};
    console.log('user register', request1);
    this.service.login(request1).subscribe(
      (res: any) =>{
        console.log('res', res);
        // tslint:disable-next-line: no-conditional-assignment
        if (res.msg = 'Success') {
          let response = res.otpno;
          localStorage.setItem('Token', JSON.stringify(res));
          this.otpNo = response.split('');
          console.log('tosee otp', this.otpNo);
          this.ngxService.stop();
          this.showOTPInput = true;
          this.sendOtp = ' RESEND OTP';
          this.StartTimer();
        }
      }, error =>{
        this.ngxService.stop();
        console.log('error', error.error.msg);
        this.presentToast(error.error.msg, false, 'top', 3000);

      }
      );
    this.start();
  }

  start() {
    SMSReceive.startWatch(
      () => {
        console.log('watch started');
        document.addEventListener('onSMSArrive', (e: any) => {
          console.log('onSMSArrive()');
          var IncomingSMS = e.data;
          console.log('sms.address:' + IncomingSMS.address);
          console.log('sms.body:' + IncomingSMS.body);
          // this.OTP = IncomingSMS.body;
          /* Debug received SMS content (JSON) */
          console.log(JSON.stringify(IncomingSMS));
          this.processSMS(IncomingSMS);
          this.ngxService.stop();

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
    console.log('otp', this.OTP);

    if (this.OTP != '' || JSON.stringify(this.otpNo) === JSON.stringify(this.manualOtp)) {
      this.presentToast('You are successfully registered', false, 'top', 1500);
      // this.router.navigate(['home']);
      this.navCtrl.navigateRoot('/home');

    } else {
      this.presentToast('Your OTP is not valid', false, 'bottom', 1500);
    }
  }

  goToSignup() {
    this.router.navigate(['login']);
  }
  keytab( el, event, prev) {
    console.log('key', event.key);
    console.log('keyCode', event.keyCode);
    if (event.key == 'Backspace') {
      console.log("got it !")
      this.manualOtp.pop();
      prev.setFocus();
   } else {
    console.log('event', JSON.stringify(this.manualOtp), this.otpNo);
    el.setFocus();
    if (this.manualOtp.length <= 5) {
    this.manualOtp.push(event.target.value);
  }

}
}
StartTimer(){
  this.timer = setTimeout( x => {
        if (this.maxtime <= 0) { }
        this.maxtime -= 1;

        if (this.maxtime > 0) {
          this.hidevalue = false;
          this.StartTimer();
          console.log('timer', this.maxtime);
        } else {
          console.log('timer1', this.maxtime);
          this.hidevalue = true;
          if ( this.maxtime === 0) {
            this.resend = false;
          }
        }
    }, 1000);
  console.log('timer2', this.maxtime);
}
}
