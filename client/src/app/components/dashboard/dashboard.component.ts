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
  userId: String = JSON.parse(localStorage.getItem('user')).id;
  userToken: any = localStorage.getItem('id_token');
  userCartStatus:Number;
  cartStatus:String;


  constructor(private productService: ProductService,
              private authService: AuthService,
              private cartService: CartService
              ) { }

  ngOnInit() {
    this.authService.loadToken();
    this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
        if (data.status ===0){
          console.log(data);
          this.userCartStatus=0;
          return;
        }
        if (data.status ===1){
          console.log(data);
          this.userCartStatus =1;
          return;
        } else {
          const userId = {userId : this.userId}
          this.cartService.createNewCart(userId,this.userToken).subscribe(data=>{
            console.log(data);
          })
        }
    })

    this.productService.getAllProducts().subscribe(data =>{
      this.numOfProducts = data.length;
      console.log(this.numOfProducts)
    })
  }

  capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
