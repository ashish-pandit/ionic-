import { TransactionPage } from './../transaction/transaction.page';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ToastController } from '@ionic/angular';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
productDetail;
productImage;
productName;
productPrice;
qty;
price;
productId;
machineId;
userDetail;
mobile;
productQty;
  constructor(private router: Router, private service: AuthService, private ngxService: NgxUiLoaderService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.productDetail = JSON.parse(localStorage.getItem('prodcutDetail'));
    this.userDetail = JSON.parse(localStorage.getItem('Token'));
    console.log('user', this.userDetail);
    this.mobile = this.userDetail.mobile_no;
    this.productImage = this.productDetail.product.product_image;
    this.productName = this.productDetail.product.product_name;
    this.productPrice = this.productDetail.product.updated_price;
    this.qty = 1;
    this.price = this.productPrice;
    this.productId = this.productDetail.product.id;
    this.machineId = JSON.parse(localStorage.getItem('machineId'));
    this.productQty = this.productDetail.quantity;
    console.log('see', this.productQty);

  }
  // increment product qty
incrementQty() {
  if (this.qty <= this.productQty - 1) {
    this.qty += 1;
    console.log(this.qty);
    this.price = (this.productPrice * this.qty);
  } else {
    this.presentToast('Available Quantity is' + ' ' + this.productQty, false, 'center', 2000);
  }

  }
  // decrement product qty
  decrementQty() {
  if (this.qty - 1 < 1 ) {
  this.qty = 1;
  } else {
  this.qty -= 1;
  this.price = (this.productPrice * this.qty);
  // console.log(‘2->’+this.qty);
  }
  }
  goToTransaction() {
   this.ngxService.start();
   const req1 = { machine_id: this.machineId};
   this.service.machineIsIdle(req1).subscribe(
     (response: any) => {
       console.log('idle', response);
       if (response.idle === true) {
        const reqBody = {
          machine_id: this.machineId,
          product: this.productId,
          quantity: this.qty,
          total_amount: this.price,
          mobile_no: this.mobile
         };
        this.service.transaction(reqBody).subscribe(
          (res: any) => {
            console.log('res', res);
            localStorage.setItem('orderId', JSON.stringify(res.ORDER_ID));
            const paytm = {
             MID: res.MID, // paytm provide
             WEBSITE: res.WEBSITE, // paytm provide
             INDUSTRY_TYPE_ID: res.INDUSTRY_TYPE_ID, // paytm provide
             CHANNEL_ID: res.CHANNEL_ID, // paytm provide
             ORDER_ID: res.ORDER_ID, // unique id
             CUST_ID: res.CUST_ID, // customer id
           //  MOBILE_NO: "xxxx", // customer mobile number
           //  EMAIL: "xxxx", // customer email
             TXN_AMOUNT: res.TXN_AMOUNT, // transaction amount,
             CHECKSUMHASH: res.checksum,
             CALLBACK_URL: res.CALLBACK_URL, // Call back URL that i want to redirect after payment fail or success
           };
            this.createPaytmForm(paytm);
          }, error => {
            this.ngxService.stop();
            console.log('error', error);
          }
        );
       } else {
        this.ngxService.stop();
        this.presentToast(response.msg, false, 'top', 2000);
       }
     }, error => {
       this.ngxService.stop();
       console.log('error', error);
     }
   );
  }

  createPaytmForm(parame) {
    const myform: any = document.createElement('form');
    myform.name = 'paytm_form';
    myform.method = 'post';
    myform.action = 'https://securegw-stage.paytm.in/order/process';

    const myParams = Object.keys(parame);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < myParams.length; i++) {
       const key = myParams[i];
       const mytb: any = document.createElement('input');
       mytb.type = 'hidden';
       mytb.name = key;
       mytb.value = parame[key];
       myform.appendChild(mytb);
     }
    document.body.appendChild(myform);
    this.ngxService.stop();
    myform.submit();
 // after click will fire you will redirect to paytm payment page.
 // after complete or fail transaction you will redirect to your CALLBACK URL
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

}
