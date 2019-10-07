import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/Product";
import {Credentials} from "../models/Credentials";


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts ():Observable<any>{
    return this.http.get<any>('api/product/products')

  }
getProductsByCategoryId(categoryId):Observable<Product[]>{
    return this.http.get<Product[]>(`api/product/productsByCategory/${categoryId}`)
}

getProductById(productId):Observable<Product>{
  return this.http.get<Product>(`api/product/getProductById/${productId}`)
}

  searchProduct(name):Observable<any>{
    return this.http.get<any>(`api/product/search?name=${name}`);
  }

  editProduct(productId,editedProduct,token):Observable<Product>{
    return this.http.put<Product>(`api/product/editProductById/${productId}`,editedProduct,{headers: {Authorization: token}});
  }

  createNewProduct(product,token):Observable<Product>{
    return this.http.post<Product>('api/product/createNewProduct',product,{headers: {Authorization: token}});
  }

  }




