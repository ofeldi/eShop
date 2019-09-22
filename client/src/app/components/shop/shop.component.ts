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
  userToken: String;
  cartId: String;
  public currentCartProducts: Product[];
  productId: String;
  ProductsByCategory: Product[];
  public quantity: any;
  products:Record<string,Product>;
  totalCartPrice: any;
  searchInputOn:boolean = true;
  productsForCart: Record<string,Product>;
  productsLength:Number;
  searchValue:string = "";
  numOfSearchResults:Number;
  isLoading:Boolean = true;

  constructor(private authService: AuthService,
              private productService: ProductService,
              private categoryService: CategoryService,
              private cartService: CartService
  ) {
  }

  ngOnInit() {
console.log(this.currentCartProducts);
    console.log(JSON.parse(localStorage.getItem('cart')));
    this.authService.loadUserPayload();
    this.authService.loadUserCart();
    this.cartId = this.authService.userCart._id;
    this.authService.loadToken();
    this.userId = this.authService.currentUserData.id;
    this.userToken = this.authService.currentUserToken;

    this.categoryService.geAllCategories().subscribe(data => {
      this.categories = data;
    });

    this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
        this.currentCartProducts = data.cart.products;
        console.log(data);
        this.setTotalPrice();

    });

    this.productService.getAllProducts().subscribe(data => {
      this.convertArrayToObject(data);
      this.productsLength = Object.keys(data).length;
      console.log("products for cart: " ,this.productsForCart);
      console.log("all products " , this.products);
    })

  }

  addToCart(productId) {
   const cartProduct = this.currentCartProducts.find((product)=>product._id === productId);
    if (cartProduct === undefined){
      this.productId = productId;
      this.quantity = 1;
    } else if (cartProduct._id === productId){
      this.quantity = cartProduct.quantity;
      this.productId = productId
     }
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
      const setOpenCart = {isOpen: 1, date: new Date()};
      this.updateCartStatus(cartId,setOpenCart);
    }
      this.cartService.addProductToCart(cartId, addedProduct, this.userToken).subscribe(data => {
        this.updateLocalStorage(data);
        console.log(addedProduct);
        this.setTotalPrice();
      })
  };

  updateCartStatus(cartId,setOpenCart){
    this.cartService.updateCartStatus(cartId, setOpenCart, this.userToken).subscribe(data => {
      this.updateLocalStorage(data);
    });
  }


  updateLocalStorage(cartData){
    this.authService.storeCartData(cartData);
    this.authService.loadUserCart();
    this.currentCartProducts = this.authService.userCart.products;
  }

  filterProductsByCategory(categoryId) {
    // console.log(categoryId)
    this.productService.getProductsByCategoryId(categoryId).subscribe(data => {
      this.ProductsByCategory = data;
      this.searchInputOn = false;

    })
  };

  showAllProducts() {
    this.ProductsByCategory = null;
    this.searchInputOn = true;
  }

  deleteProductFromCart(_id){
    const productId = { _id };
    this.cartService.deleteProductFromCart(this.cartId,productId,this.userToken).subscribe(data =>{
      console.log(data);
      this.updateLocalStorage(data);
      this.setTotalPrice();
    });
    if (this.currentCartProducts.length == 1){
      const setOpenCart = {isOpen: 0};
      this.updateCartStatus(this.cartId,setOpenCart);
    }

  }

  deleteAllProductsFromCart(){
    this.cartService.deleteAllProductsFromCart(this.cartId,this.userToken).subscribe(data=>{
      console.log(data);
      this.updateLocalStorage(data);
    })
    const setOpenCart = {isOpen: 0};
    this.updateCartStatus(this.cartId,setOpenCart);

  }

  setTotalPrice(){
    this.totalCartPrice = 0;
    for (let i=0;i<this.currentCartProducts.length;i++){
      this.totalCartPrice += this.currentCartProducts[i].quantity as any * this.productsForCart[this.currentCartProducts[i]._id as any].price;
    }
    const totalCartPrice = {totalCartPrice : this.totalCartPrice};
    this.cartService.setCartTotalPrice(this.cartId,totalCartPrice,this.userToken).subscribe(data =>{
      console.log(data);
      this.updateLocalStorage(data);
      });
  }


  onUserSearch(searchValue){
    this.productService.searchProduct(searchValue).subscribe(data =>{
      const valueFound = data;
      const results = {};
      for (let i=0; i<valueFound.length;i++){
        results[valueFound[i]._id] = valueFound[i];
      }
      this.products = results;
      this.numOfSearchResults = valueFound.length;
    })
  }

  convertArrayToObject(productsArray){
    const productsObject = {};
    for (let i = 0; i < productsArray.length; i++) {
      productsObject[productsArray[i]._id] = productsArray[i];
    }
  this.products = productsObject;
    this.productsForCart = productsObject;

  }

  capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  allowNumberOnly(e){
    const code = (e.which) ? e.which : e.keycode;
    if (code > 31 && (code < 48 || code > 57)){
      e.preventDefault()
    }
  }

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



