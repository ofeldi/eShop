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

  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:4000/api/order/orders')
  }

  createNewOrder(order,token):Observable<any> {
    return this.http.post<any>('http://localhost:4000/api/order/createNewOrder',order,{headers:{Authorization:token}})
  }

  getOccupiedDates(token):Observable<any>{
    return this.http.get<any>('http://localhost:4000/api/order/getOccupiedDates',{headers:{Authorization:token}})
  }
  getLatestOrderByUserId(userId,token):Observable<Order>{
    return this.http.get<Order>(`http://localhost:4000/api/order/getLatestOrderByUserId/${userId}`,{headers:{Authorization:token}})
  }


}
