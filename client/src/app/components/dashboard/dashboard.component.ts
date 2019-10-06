import { Component, OnInit } from '@angular/core';
import {ProductService } from "../../services/product.service";
import { AuthService } from "../../services/auth.service";
import { CartService } from "../../services/cart.service";
import { OrderService } from "../../services/order.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  numOfProducts : number;
  userId: String;
  userToken:String;
  cartStatus:String;
  isLoading:Boolean = true;
  dashBoardMsg:any;
  numOfOrders:Number;

  constructor(private productService: ProductService,
              private authService: AuthService,
              private cartService: CartService,
              private orderService: OrderService
              ) { }

  ngOnInit() {
    this.authService.loadUserPayload();
    this.authService.loadToken();

    this.userId = this.authService.currentUserData.id;
    this.userToken = this.authService.currentUserToken;

    this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
      console.log(data.msg);
      if (data.status ===0){

          this.authService.storeCartData(data.cart);
          this.orderService.getLatestOrderByUserId(this.userId,this.userToken).subscribe(date=>{
            console.log(date[0])
            if (date[0])  {
              this.dashBoardMsg = "Welcome back, no opened carts were found. Your last order's date is: " + (new DatePipe ("en").transform(date[0].orderDate,"dd/MM/yyyy"));
            } else {
              this.dashBoardMsg = "Welcome to our shop, Enjoy your first buy ♥"
            }
          })
          return;
        }
        if (data.status === 1){
          this.authService.storeCartData(data.cart);
          this.dashBoardMsg = "You have an opened cart from " + (new DatePipe ("en").transform(data.msg,"dd/MM/yyyy"));
          return;
        } else {
          const userId = {userId : this.userId};
          this.cartService.createNewCart(userId,this.userToken).subscribe(data=>{
            this.authService.storeCartData(data.cart);
            this.dashBoardMsg = "Welcome to our shop, Enjoy your first buy ♥"
          });
        }
    });

    this.productService.getAllProducts().subscribe(data =>{
      this.numOfProducts = Object.keys(data).length;
      setTimeout(() => {
        this.isLoading = false;
      }, 300)
    })

    this.orderService.getAllOrdersLength().subscribe(data =>{
      this.numOfOrders = data;
    });

  }

  capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



}
