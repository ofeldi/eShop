import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ProductService} from "../../services/product.service";
import {Category} from "../../models/Category";
import {CategoryService} from "../../services/category.service";
import {Product} from "../../models/Product";
import {CartService} from "../../services/cart.service";



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categories: Category[];
  userId: String;
  userToken: any;
  cartId: String;
  currentCartProducts: any;
  productId: String;
  ProductsByCategory: Product[];
  allProductsString: string = "{";
  allProductsObject: any;
  productsInCart: Product[];
  public quantity: number;


  usersCartId: any = localStorage.getItem('users_cart');


  constructor(private authService: AuthService,
              private productService: ProductService,
              private categoryService: CategoryService,
              private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.authService.loadUserCart();
    this.cartId = this.authService.userCart._id;
    this.authService.loadToken();
    this.userId = this.authService.currentUserData.id;
    this.userToken = localStorage.getItem('id_token');
    console.log("user id: " + this.userId);

    this.categoryService.geAllCategories().subscribe(data => {
      this.categories = data;
      //console.log(data);
    })

    this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
      if (data != null) {
        this.productsInCart = data.cart.products;
        console.log(this.productsInCart[0]._id);
      }
      ;

    })

    this.productService.getAllProducts().subscribe(data => {
      //console.log(data);
      for (let i = 0; i < data.length; i++) {
        this.allProductsString = this.allProductsString + '"' + (data[i]._id) + '"' + ":" + (JSON.stringify(data[i])) + ',';
      }

      this.allProductsString = this.allProductsString.slice(0, -1);
      this.allProductsString = this.allProductsString.slice(0, -1) + "}}";
      this.allProductsObject = (JSON.parse(this.allProductsString));

      console.log((this.allProductsObject));
    });

  }

  addToCart(productId) {
    this.productId = productId;
    this.quantity = 1;
  };

  addItem() {
    this.quantity = this.quantity + 1;
  }

  removeItem() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1
    }
  }

  sendToCart(_id, quantity) {
    const addedProduct = {_id, quantity};
    const cartId = this.cartId;
    const cartStatus = this.authService.userCart.isOpen;
    if (cartStatus === 0) {
      const setOpenCart = {isOpen: 1};
      this.cartService.updateCartStatus(cartId, setOpenCart, this.userToken).subscribe(data => {
        this.authService.storeCartData(data);
        this.authService.loadUserCart();
      })
    }
    if (cartStatus === 1) {
      this.cartService.addProductToCart(cartId, addedProduct, this.userToken).subscribe(data => {
        this.authService.storeCartData(data);
        this.authService.loadUserCart();
      })
    }
  };

  filterProductsByCategory(categoryId) {
    // console.log(categoryId)
    this.productService.getProductsByCategoryId(categoryId).subscribe(data => {
      this.ProductsByCategory = data
    })
  };
}

 /* addProductToCart(_id,quantity){
    const productObj = {
      _id,
      quantity
    }
    console.log(this.usersCartId,productObj,this.userToken);
    this.cartService.addProductToCart(this.usersCartId,productObj,this.userToken).subscribe(data=>{
      console.log(data);
    })
  }*/



