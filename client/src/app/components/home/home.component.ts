import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import { OrderService } from "../../services/order.service";
import { AuthService } from "../../services/auth.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numOfProducts: number;
  numOfOrders:number;
  userId: String = JSON.parse(localStorage.getItem('user')).id;
  userToken: any = localStorage.getItem('id_token');
  cartDate:Date;
  isCartOpen:boolean;
  cartStatus:String;
  usersCartId:any;

  constructor(private productService: ProductService,
              private orderService: OrderService,
              private authService: AuthService,
              private cartService:CartService
             ) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.numOfProducts = data.length;
     // console.log(this.numOfProducts);
    });


    this.orderService.getAllOrders().subscribe(data =>{
      this.numOfOrders = data.length;

    });

    this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
      if (data != null) {
       // console.log(data.cart.products);
        this.cartDate = data.date;
        this.isCartOpen = data.isOpen;
        this.cartStatus = data.msg + " " + data.date;
        this.usersCartId = data.cart._id;
      };
      // @ts-ignore
      localStorage.setItem('users_cart',this.usersCartId);
    })

  }
}
