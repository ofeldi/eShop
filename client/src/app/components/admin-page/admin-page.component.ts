import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";



@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
isAdmin:boolean;
userId:string;


  constructor(
    private authService: AuthService,
    private router:Router


  ) { }

  ngOnInit( ) {
   /* this.userId = JSON.parse(localStorage.getItem('user')).id;
    this.authService.checkIfUserAdmin(this.userId).subscribe(data=>{
      if (data === null){
        this.router.navigate(['dashboard'])
      }
    })*/

  }

}
