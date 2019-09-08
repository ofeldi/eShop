import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {SignupComponent} from "./components/signup/signup.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./gurds/auth.gurd";
import {ShopComponent} from "./components/shop/shop.component";
import {OrderComponent} from "./components/order/order.component";

const routes: Routes = [
  { path: '',component:HomeComponent },
  { path: 'signup',component:SignupComponent },
  { path: 'login', component:LoginComponent},
  { path: 'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  { path: 'shop',component:ShopComponent,canActivate:[AuthGuard]},
  { path: 'order',component:OrderComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
