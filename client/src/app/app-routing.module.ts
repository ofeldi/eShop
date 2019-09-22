import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {SignupComponent} from "./components/signup/signup.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./gurds/auth.gurd";
import {AdminGuard} from './gurds/adminGuard'
import {ShopComponent} from "./components/shop/shop.component";
import {OrderComponent} from "./components/order/order.component";
import {InvoiceComponent} from "./components/invoice/invoice.component";
import {NotFoundComponent} from "./components/layout/not-found/not-found.component";
import {AdminPageComponent} from "./components/admin-page/admin-page.component";

const routes: Routes = [
  { path: '',component:HomeComponent },
  { path: 'signup',component:SignupComponent },
  { path: 'login', component:LoginComponent},
  { path: 'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  { path: 'shop',component:ShopComponent,canActivate:[AuthGuard]},
  { path: 'order',component:OrderComponent,canActivate:[AuthGuard]},
  { path: 'invoice', component:InvoiceComponent,canActivate:[AuthGuard]},
  { path: 'admin', component: AdminPageComponent,canActivate:[AdminGuard]},
  { path: '**', redirectTo:'/404'},
  { path: '404',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
