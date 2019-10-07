import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from "../models/Order";
import {Product} from "../models/Product";

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getAllOrders(token):Observable<Order[]>{
    return this.http.get<Order[]>('api/order/orders',{headers:{Authorization:token}})
  }

  getAllOrdersLength():Observable<Number>{
    return this.http.get<Number>('api/order/ordersLength')
  }

  createNewOrder(order,token):Observable<any> {
    return this.http.post<any>('api/order/createNewOrder',order,{headers:{Authorization:token}})
  }

  getOccupiedDates(token):Observable<any>{
    return this.http.get<any>('api/order/getOccupiedDates',{headers:{Authorization:token}})
  }
  getLatestOrderByUserId(userId,token):Observable<Order>{
    return this.http.get<Order>(`api/order/getLatestOrderByUserId/${userId}`,{headers:{Authorization:token}})
  }


}
