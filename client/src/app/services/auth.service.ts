import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Credentials } from "../models/Credentials";
import {User} from "../models/User";
import { JwtHelperService } from '@auth0/angular-jwt';
import {Cart} from "../models/Cart";

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authToken:String;
loggedUser:User;
currentUserData:User;
userCart:Cart;
currentUserToken:String;


  constructor(private http: HttpClient) { }

  checkUserCredentials (userCredentials):Observable<Credentials>{
    return this.http.post<Credentials>('http://localhost:4000/api/user/registerCheck',userCredentials,httpOptions)

  }

  registerUser (user):Observable<Credentials>{
    return this.http.post<Credentials>('http://localhost:4000/api/user/register',user,httpOptions)

  }

  loginUser (loginDetails):Observable<Credentials>{
    return this.http.post<Credentials>('http://localhost:4000/api/user/login',loginDetails,httpOptions);
  }

  checkIfUserAdmin(userId):Observable<User>{
    return this.http.get<User>(`http://localhost:4000/api/user/checkIfUserAdmin/${userId}`);
  }

  storeUserData(token,loggedUser){
    localStorage.setItem('id_token',token);
    console.log(loggedUser);
    localStorage.setItem('user',JSON.stringify(loggedUser));
    this.authToken = token;
    this.loggedUser = loggedUser;
  }

  loadUserPayload(){
    this.currentUserData = JSON.parse(localStorage.getItem('user'));
  }

  loadToken(){
   this.currentUserToken = localStorage.getItem('id_token');
  }

  isLoggedUser = () => {
  let jwtHelper = new JwtHelperService();
  if(localStorage.id_token == undefined)
    return false;
  return !jwtHelper.isTokenExpired(localStorage.id_token);
  };


  logoutUser(){
    this.authToken = null;
    this.loggedUser = null;
    localStorage.clear();
  }

storeCartData = (currentUserCart) =>{
localStorage.setItem('cart',JSON.stringify(currentUserCart));
  }

  loadUserCart (){
    this.userCart = JSON.parse(localStorage.getItem('cart'));
  }




}
