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
//   return this.http.get<Cart>(`http://localhost:4000/api/cart/getUserCart/${userId}`,{headers:{Authorization: token}})
// }

  getUserCartStatus(userId,token):Observable<Cart>{
    return this.http.get<Cart>(`http://localhost:4000/api/cart/getUserCartStatus/${userId}`,{headers:{Authorization: token}});
  }

  createNewCart(userId,token):Observable<Cart>{
    return this.http.post<Cart>('http://localhost:4000/api/cart/createCart',userId,{headers:{Authorization:token}});
  }

  addProductToCart(cartId,product,token):Observable<Product>{
    return this.http.put<Product>(`http://localhost:4000/api/cart/addProductToCart/${cartId}`,product,{headers:{Authorization:token}})
  }

  updateCartStatus(cartId,product,token):Observable<Cart>{
    return this.http.put<Cart>(`http://localhost:4000/api/cart/updateCartStatus/${cartId}`,product,{headers:{Authorization:token}})
  }

}
