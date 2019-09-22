import {Injectable} from "@angular/core";
import {Router, CanActivate} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()

export class AdminGuard implements CanActivate {

  userToken:any;

  constructor(private authService: AuthService,
              private router: Router) {
  }


  canActivate() {
    this.authService.loadToken();
    this.userToken = this.authService.currentUserToken;
    let tokenInfo = this.authService.getDecodedAccessToken(this.userToken);
    if(this.authService.isLoggedUser() && tokenInfo.isAdmin === true){
      return true;
    }else{
      this.router.navigate(['dashboard']);
      return false;
    }
  }


}
