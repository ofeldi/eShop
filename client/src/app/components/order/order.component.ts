import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";
import {city} from "../signup/signup.component";
import {Product} from "../../models/Product";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { OrderService } from "../../services/order.service";
import {DatePipe} from "@angular/common";
import {Cart} from "../../models/Cart";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  userId: String;
  userToken: String;
  cartId: String;
  productsForCart: any;
  isLoading: boolean = true;
  totalPrice: Number;
  orderForm: FormGroup;
  public searchValue:string;
  currentCart:Cart;


  cities: city[] = [
    {value: 'Tel Aviv-0', viewValue: 'Tel Aviv'},
    {value: 'Haifa-1', viewValue: 'Haifa'},
    {value: 'Jerusalem-2', viewValue: 'Jerusalem'},
    {value: 'Beer Sheva-3', viewValue: 'Beer Sheva'},
    {value: 'Rishon le Zion-4', viewValue: 'Rishon le Zion'},
    {value: 'Herzelia-5', viewValue: 'Herzelia'},
    {value: 'Ramat Ha Sharon-6', viewValue: 'Ramat Ha Sharon'},
    {value: 'Netanya-7', viewValue: 'Netanya'},
    {value: 'Karkur-8', viewValue: 'Karkur'},
    {value: 'Eilat-9', viewValue: 'Eilat'},
  ];

  public currentCartProducts: Product[];

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private cartService: CartService,
    private orderService: OrderService,
  ) {

  }

  ngOnInit() {
    this.authService.loadUserCart();
    this.authService.loadUserPayload();
    this.authService.loadToken();

    this.userToken = this.authService.currentUserToken;
    this.userId = this.authService.userCart.userId;
    this.cartId = this.authService.userCart._id;
    this.currentCart = this.authService.userCart;
    console.log(this.currentCart);

    this.getAllProducts();
    this.currentCartProducts = this.authService.userCart.products;
    this.totalPrice = this.authService.userCart.totalCartPrice;

    this.orderForm = new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      deliveryDate: new FormControl('', Validators.required),
      creditCard: new FormControl('', Validators.required)
    })
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.convertArrayToObject(data);
      this.isLoading = false;
    })
  }

  convertArrayToObject(productsArray) {
    const productsObj = {};
    for (let i = 0; i < productsArray.length; i++) {
      productsObj[productsArray[i]._id] = productsArray[i]
    }
    this.productsForCart = productsObj;
  }

  setUserAddress() {
    this.authService.loadUserPayload();
    this.orderForm.controls['city'].setValue(this.authService.currentUserData.city);
    this.orderForm.controls['street'].setValue(this.authService.currentUserData.street);
  }

  onOrderSubmit() {
    const orderDetails = this.orderForm.getRawValue();
    const creditCard = orderDetails.creditCard;
    const deliveryDate = new DatePipe('en').transform(orderDetails.deliveryDate, 'yyyy/MM/dd');
    console.log(creditCard, deliveryDate);


    const order = {
      userId: this.userId,
      cartId: this.cartId,
      street: orderDetails.street,
      totalPrice: this.totalPrice,
      city: orderDetails.city,
      deliveryDate: deliveryDate,
      creditCard: creditCard,
      products:this.currentCartProducts,
      cart:this.currentCart,
    };
    console.log(this.cartId);
    this.orderService.createNewOrder(order, this.userToken).subscribe(data => {
      console.log(data);
    }, err => {
      if (err.status === 400) {
        Object.keys(err.error).forEach(prop => {
          const formControl = this.orderForm.get(prop);
          if (formControl) {
            formControl.setErrors({
              serverError: err.error[prop]
            });
          }
        });
      }
    });
    console.log(orderDetails);
  }

}
