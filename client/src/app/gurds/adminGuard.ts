import {Injectable} from "@angular/core";
import {Router, CanActivate} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()

export class AuthGuard implements CanActivate {
  isAdmin:boolean;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate() {
      this.authService.loadUserPayload();
      const id = this.authService.currentUserData.id;

      if(!id){
        this.router.navigate([''])
      return false;
      }

      this.authService.checkIfUserAdmin(id).subscribe(data =>{
        this.isAdmin = data.isAdmin;
      })
    if (this.authService.isLoggedUser() && this.isAdmin === true){
      return true;
    } else {
      this.router.navigate(['dashboard']);
      return false;
    }
  }
}
