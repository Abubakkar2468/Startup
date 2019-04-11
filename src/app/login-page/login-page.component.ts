import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import * as $AB from 'jquery';
import * as bootstrap from 'bootstrap';

// declare var $: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: LoginService, private cookie: CookieService, private router: Router) { }

  ngOnInit() {
    $('.carousel').carousel({
      interval: 2000
    });
  }

  login() {
    // alert(txt);
    this.loginService.login().subscribe((res) => {
      console.log(res);
      this.cookie.set(btoa('token'), btoa(res['token']), 1000);
      this.router.navigate(['feed'])
    });
  }

}
