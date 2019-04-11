import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: String = "http://localhost:8000/api/users/";

  constructor( private http: HttpClient) { }


  login() {
     
    const url = this.apiUrl + 'login';

    return this.http.post(url, {
      "user": {
        "email": "abc@yopmail.com",
        "password": "abc2468"
      }
    });

  }
}
