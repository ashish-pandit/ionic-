import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-payment-failure',
  templateUrl: './payment-failure.page.html',
  styleUrls: ['./payment-failure.page.scss'],
})
export class PaymentFailurePage implements OnInit {
  orderId;
  failureMsg;
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
    this.orderId =  JSON.parse(localStorage.getItem('orderId'));
    console.log('orderid', this.orderId);
    const req = {orderid: this.orderId};
    this.service.paymentFailure(req).subscribe(
      (res: any) => {
        console.log('res', res);
        this.failureMsg = res.msg;
      }, error => {
        console.log('error', error);
      }
    );
  }
  goToHome() {
  this.router.navigate(['/home']);
  }
  }


