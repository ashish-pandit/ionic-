import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParseSourceSpan } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url;
  constructor(private http: HttpClient) { }
  otp(data) {
    console.log('reached here', data);
    return this.http.post(this.url + 'send-otp/', data);
  }
  signUp(data) {
    console.log('reached here register', data);
    return this.http.post(this.url + 'register/', data);
  }
  login(data) {
    console.log('reached here register', data);
    return this.http.post(this.url + 'login/', data);
  }
  machinId(data) {
    console.log('reached here register', data);
    return this.http.post(this.url + 'machine-presence/', data);
  }
  machinNearBy(data) {
    console.log('reached here register', data);
    return this.http.post(this.url + 'locate-nearest-machine/', data);
  }
  product(data) {
    console.log('reached here register', data);
    return this.http.get(this.url + 'get-products/?machine_id=' + data);
  }
  transaction(data) {
    console.log('reached here register', data);
    return this.http.post(this.url + 'create-paytm-transaction/', data);
  }
  demo(data) {
    return this.http.post('https://securegw-stage.paytm.in/order/process', data);
  }
  paymentSuccess(data) {
    console.log('reached here register', data);
    return this.http.post(this.url + 'payment-success/', data);
  }
  paymentFailure(data) {
    console.log('reached here register', data);
    return this.http.post(this.url + 'payment-failure/', data);
  }
  machineIsIdle(data) {
    return this.http.post(this.url + 'is-idle/', data);
  }
}

