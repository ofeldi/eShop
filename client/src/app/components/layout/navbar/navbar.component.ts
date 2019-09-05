import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.loadUserPayload();
  }

  onLogOutClick(){
    this.authService.logoutUser();
    this.router.navigate(['']);
    return false;
  }

  capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



}
