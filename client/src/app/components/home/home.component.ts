import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import { OrderService } from "../../services/order.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numOfProducts: number;
  numOfOrders:number;

  constructor(private productService: ProductService,
              private orderService: OrderService,
              private authService: AuthService
             ) {}

  ngOnInit() {
   this.productService.getAllProducts().subscribe(data => {
      this.numOfProducts = data.length;
     // console.log(this.numOfProducts);
    });


    this.orderService.getAllOrders().subscribe(data =>{
      this.numOfOrders = data.length;

    });



  }
}
