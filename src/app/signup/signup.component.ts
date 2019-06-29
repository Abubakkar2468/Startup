import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  constructor(private service: LoginService, private serv: CommonService) { }

  name: any = null;
  email: any = null;
  password: any = null;

  ngOnInit() {
  }

  signUp() {
    const obj = {
      user: {
        username: this.name,
        email : this.email,
        password : this.password
      }
    };
    this.service.signup(obj).subscribe( (res) => {
      console.log(res);
      this.serv.username = res['user']['username'];
    });
  }

}
