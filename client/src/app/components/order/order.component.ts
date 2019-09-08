import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";
import {city} from "../signup/signup.component";
import {Product} from "../../models/Product";
import {FormGroup, FormControl, Validators} from "@angular/forms";

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

  form = new FormGroup({
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    shippingDate: new FormControl('', Validators.required),
    creditCard: new FormControl('', Validators.required)
  });

  public currentCartProducts: Product[];

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.authService.loadUserPayload();
    this.authService.loadToken();
    this.authService.loadUserCart();

    this.userToken = this.authService.currentUserToken;
    this.userId = this.authService.currentUserData.id;

    this.getAllProducts();
    this.currentCartProducts = this.authService.userCart.products;
    this.totalPrice = this.authService.userCart.totalCartPrice;
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
    this.form.controls['city'].setValue(this.authService.currentUserData.city);
    this.form.controls['street'].setValue(this.authService.currentUserData.street);
  }
}
