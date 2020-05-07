import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
name;
mobile;
  constructor() { }

  ngOnInit() {
    const userDetail = JSON.parse(localStorage.getItem('Token'));
    console.log('user', userDetail);
    this.name = userDetail.name;
    this.mobile = userDetail.mobile_no;

  }

}
