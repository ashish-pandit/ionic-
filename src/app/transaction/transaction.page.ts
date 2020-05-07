import { Component, OnInit, ViewChild } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  @ViewChild('testForm', {static: true}) testFormEl;
paytmCred;
CHANNEL_ID;
CUST_ID;
INDUSTRY_TYPE_ID;
MID;
ORDER_ID;
TXN_AMOUNT;
WEBSITE;
checksum;
  constructor(private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    // this.inAppBrowser.create("https://www.w3schools.com/php/");
  this.paytmCred = JSON.parse(localStorage.getItem('paytm'));
  console.log('check', this.paytmCred);
  this.CHANNEL_ID = this.paytmCred.CHANNEL_ID;
  this.CUST_ID = this.paytmCred.CUST_ID;
  this.INDUSTRY_TYPE_ID = this.paytmCred.INDUSTRY_TYPE_ID;
  this.MID = this.paytmCred.MID;
  this.ORDER_ID = this.paytmCred.ORDER_ID;
  this.TXN_AMOUNT = this.paytmCred.TXN_AMOUNT;
  this.WEBSITE = this.paytmCred.WEBSITE;
  this.checksum = this.paytmCred.checksum;
  console.log(this.checksum);
  this.testFormEl.nativeElement.submit();
  }

}
