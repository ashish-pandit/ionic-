import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
products;
machine;
  constructor(private service: AuthService, private ngxService: NgxUiLoaderService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.machine = JSON.parse(localStorage.getItem('machineId'));
    console.log('machineId', this.machine);

    this.ngxService.start();
    this.getProduct();
  }
  getProduct() {
    this.service.product(this.machine).subscribe(
      (res: any) => {
        console.log('res', res);
        this.products = res;
        this.ngxService.stop();
      }, error =>{
        console.log('error', error);
        this.ngxService.stop();

      }
      );
  }
  goToProductDetail(product) {
    console.log('product', product);
    localStorage.setItem('prodcutDetail', JSON.stringify(product));
    this.router.navigate(['product-detail']);

  }

}
