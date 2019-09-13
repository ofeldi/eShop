import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {MatStepper} from "@angular/material";
import { Router } from "@angular/router";

export interface city {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  isLinear: boolean = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  formIsValid: boolean = false;
  userIsReistered: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      identityNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])],
      city: ['', Validators.required],
      street: ['', Validators.required]
    });
  }

  city: city[] = [
    {value: 'Tel Aviv-0', viewValue: 'Tel Aviv'},
    {value: 'Haifa-1', viewValue: 'Haifa'},
    {value: 'Jerusalem-2', viewValue: 'Jerusalem'},
    {value: 'Beer Sheva-3', viewValue: 'Beer Sheva'},
    {value: 'Rishon le Zion-4', viewValue: 'Rishon le Zion'},
    {value: 'Herzelia-5', viewValue: 'Herzelia'},
    {value: 'Ramat Ha Sharon-6', viewValue: 'Ramat Ha Sharon'},
    {value: 'Netanya-7', viewValue: 'Netanya'},
    {value: 'Karkur-8', viewValue: 'Karkur'},
    {value: 'Eilat-9', viewValue: 'Eilat'},
  ];

  onFirstStepSubmit() {

    const signUpDetails = this.firstFormGroup.getRawValue();
    const identityNumber = signUpDetails.identityNumber.toString();

    const credentials = {
      identityNumber : identityNumber,
      email: signUpDetails.email,
      password: signUpDetails.password,
      password2: signUpDetails.password2
    };

    this.authService.checkUserCredentials(credentials).subscribe((data) => {
      if (data.userChecked) {
        this.formIsValid = true;
      }
    }, err => {
      if (err.status === 400) {
        Object.keys(err.error).forEach(prop => {
          const formControl = this.firstFormGroup.get(prop);
          if (formControl) {
            //activate the error message
            formControl.setErrors({
              serverError: err.error[prop]
            });
          }
        });
        this.formIsValid = false;
      }
    });
  }

  onSecondStepSubmit() {
    const credentials = this.firstFormGroup.getRawValue();
    const shippingDetails = this.secondFormGroup.getRawValue();
    const identityNumber = credentials.identityNumber.toString();
    const user = {
      email: credentials.email,
      identityNumber: identityNumber,
      password: credentials.password,
      lastName: shippingDetails.lastName,
      firstName: shippingDetails.firstName,
      city: shippingDetails.city,
      street: shippingDetails.street
    };
    console.log(user);
    this.authService.registerUser(user).subscribe(user => {
      console.log(user);
      if(user){
        const loginDetails = {
          email:credentials.email,
          password:credentials.password
        }
        this.redirectToDashboard(loginDetails);
      }
    }, err => {
      if (err.status === 400) {
        Object.keys(err.error).forEach(prop => {
          const formControl = this.secondFormGroup.get(prop);
          if (formControl) {
            formControl.setErrors({
              serverError: err.error[prop]
            });
          }
        });
        this.userIsReistered = false;
      }
    })
  }

  goForward(stepper:MatStepper){
    setTimeout(()=>{
      if(this.formIsValid){
        stepper.next();
      }
    },1500)
  }

  allowNumberOnly(e){
    const code = (e.which) ? e.which : e.keycode;
    if (code > 31 && (code < 48 || code > 57)){
      e.preventDefault()
    }
  }

  preventPaste(e){
    e.preventDefault();
    return false;
  }
  redirectToDashboard(loginDetails){
    this.authService.loginUser(loginDetails).subscribe(data =>{
      if (data.success){
        this.authService.storeUserData(data.token,data.user);
        this.authService.loadUserPayload();
        this.authService.loadToken();
        this.router.navigate(['dashboard']);
      }
    })
  }
}
