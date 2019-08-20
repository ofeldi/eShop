import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
private userIsLoggedIn: boolean = false;

  constructor(private formBuilder:FormBuilder, private authService:AuthService) { }

  ngOnInit() {
   this.loginForm = this.formBuilder.group({
     email:['',Validators.required],
     password:['',Validators.required]
   })
  }

  onUserLogin(){
  const loginDetails = this.loginForm.getRawValue();

  this.authService.loginUser(loginDetails).subscribe(data =>{
    if (data.success){
      this.authService.storeUserData(data.token,data.user);console.log(data.user);
    }
  }, err => {
    if (err.status === 400) {
      Object.keys(err.error).forEach(prop => {
        const formControl = this.loginForm.get(prop);
        if (formControl) {
          formControl.setErrors({
            serverError: err.error[prop]
          });
        }
      });
      this.userIsLoggedIn = false;
    }
  })
}
}
