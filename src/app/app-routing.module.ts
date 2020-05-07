import { HomePage } from './home/home.page';
import { SignUpPage } from './sign-up/sign-up.page';
import { LoginPage } from './login/login.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'sign-up', component: SignUpPage},
  { path: 'product-detail', loadChildren: './product-detail/product-detail.module#ProductDetailPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'parchase', loadChildren: './parchase/parchase.module#ParchasePageModule' },
  { path: 'machine-location', loadChildren: './machine-location/machine-location.module#MachineLocationPageModule' },
  { path: 'transaction', loadChildren: './transaction/transaction.module#TransactionPageModule' },
  { path: 'payment-success', loadChildren: './payment-success/payment-success.module#PaymentSuccessPageModule' },
  { path: 'payment-failure', loadChildren: './payment-failure/payment-failure.module#PaymentFailurePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
