import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { ChatServiceService } from '../services/chat-service.service';

declare var $: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  email: any = '';
  password: any = '';
  constructor(private loginService: LoginService, private cookie: CookieService, private router: Router, private serv: ChatServiceService) { }

  ngOnInit() {
    $('.carousel').carousel({
      interval: 2000
    });
  }

  login() {
    // alert(txt);
    const obj ={
      'user': {
        'email': this.email,
        'password': this.password
      }
    };
    this.loginService.login(obj).subscribe((res) => {
      console.log(res);
      // this.serv.setUsers(res['user']);
      this.cookie.set(btoa('token'), btoa(res['user']['token']), 1000);
      window.localStorage.setItem(btoa('user'), JSON.stringify(res['user']));
      this.router.navigate(['feed']);
    });
  }

}
