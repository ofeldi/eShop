import { BrowserModule } from '@angular/platform-browser';
import { isDevMode, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AuthGuard } from "./gurds/auth.gurd";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from "@angular/material/stepper";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule, MatInputModule, MatMenuModule, MatSelectModule} from "@angular/material";
import { MatFormFieldModule, MatToolbarModule } from "@angular/material";

import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShopComponent } from './components/shop/shop.component';
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/layout/navbar/navbar.component";

import { NgRedux,NgReduxModule,DevToolsExtension } from "ng2-redux";
import { IAppState, rootReducer } from "./store";
import { INITIAL_STATE } from './store';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { OrderComponent } from './components/order/order.component';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { NgHighlightModule } from 'ngx-text-highlight';
import { InvoiceComponent } from './components/invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ShopComponent,
    SidebarComponent,
    OrderComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatMenuModule,
    NgReduxModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgHighlightModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>,
              devTools: DevToolsExtension,
  ){
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
   ngRedux.configureStore(rootReducer,INITIAL_STATE,[],enhancers);
  }
}
