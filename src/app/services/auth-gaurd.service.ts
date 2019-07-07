import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router, private cookie: CookieService) { }

  public isAuthenticate() {
    let token = this.cookie.get(btoa('token'));
    token = atob(token);
    console.log(token);
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isAuthenticate()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
