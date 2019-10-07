import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Product} from "../models/Product";

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
// getCartByUserId(userId,token):Observable<Cart>{
//   return this.http.get<Cart>(`api/cart/getUserCart/${userId}`,{headers:{Authorization: token}})
// }

  getUserCartStatus(userId,token):Observable<Cart>{
    return this.http.get<Cart>(`api/cart/getUserCartStatus/${userId}`,{headers:{Authorization: token}});
  }

  createNewCart(userId,token):Observable<Cart>{
    return this.http.post<Cart>('api/cart/createCart',userId,{headers:{Authorization:token}});
  }

  addProductToCart(cartId,product,token):Observable<Product>{
    return this.http.put<Product>(`api/cart/addProductToCart/${cartId}`,product,{headers:{Authorization:token}})
  }

  updateCartStatus(cartId,product,token):Observable<Cart>{
    return this.http.put<Cart>(`api/cart/updateCartStatus/${cartId}`,product,{headers:{Authorization:token}})
  }

  deleteProductFromCart(cartId,productId,token):Observable<any>{
    return this.http.put<any>(`api/cart/deleteProduct/${cartId}`,productId,{headers:{Authorization:token}})
  }

  deleteAllProductsFromCart(cartId,token):Observable<any>{
    return this.http.put<any>(`api/cart/deleteAllProducts/${cartId}`,{},{headers:{Authorization:token}})
  }

  setCartTotalPrice(cartId,totalCartPrice,token):Observable<Cart>{
    return this.http.put<Cart>(`api/cart/setCartTotalPrice/${cartId}`,totalCartPrice,{headers:{Authorization:token}})
  }


}
