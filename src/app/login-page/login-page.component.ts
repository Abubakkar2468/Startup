import { Component, OnInit } from '@angular/core';


import * as $AB from 'jquery';
import * as bootstrap from 'bootstrap';

// declare var $: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel({
      interval: 2000
    });
  }

}
