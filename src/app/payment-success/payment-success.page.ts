import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.page.html',
  styleUrls: ['./payment-success.page.scss'],
})
export class PaymentSuccessPage implements OnInit {
orderId;
successMsg;
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
    this.orderId =  JSON.parse(localStorage.getItem('orderId'));
    console.log('orderid', this.orderId);
    const req = {orderid: this.orderId};
    this.service.paymentSuccess(req).subscribe(
      (res: any) =>{
        console.log('res', res);
        this.successMsg = res.msg;
      }, error => {
        console.log('error', error);
      }
    );
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
