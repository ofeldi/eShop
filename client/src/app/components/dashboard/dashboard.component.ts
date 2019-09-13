import { Component, OnInit } from '@angular/core';
import {ProductService } from "../../services/product.service";
import { AuthService } from "../../services/auth.service";
import { CartService } from "../../services/cart.service";

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

  constructor(private productService: ProductService,
              private authService: AuthService,
              private cartService: CartService
              ) { }

  ngOnInit() {
    this.authService.loadUserPayload();
    this.authService.loadToken();

    this.userId = this.authService.currentUserData.id;
    this.userToken = this.authService.currentUserToken;

    this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
        if (data.status ===0){
          console.log(data);
          this.authService.storeCartData(data.cart);
          return;
        }
        if (data.status === 1){
          console.log(data);
          this.authService.storeCartData(data.cart);
          return;
        } else {
          const userId = {userId : this.userId};
          this.cartService.createNewCart(userId,this.userToken).subscribe(data=>{
            this.authService.storeCartData(data.cart);
          });
        }
    });

    this.productService.getAllProducts().subscribe(data =>{
      this.numOfProducts = Object.keys(data).length;
      setTimeout(() => {
        this.isLoading = false;
      }, 300)
    })

  }

  capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
