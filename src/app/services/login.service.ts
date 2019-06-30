import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: String = "http://192.168.43.11:8000/api/users/";

  constructor( private http: HttpClient) { }


  login(obj) {
     
    const url = this.apiUrl + 'login';

    return this.http.post(url, obj);

  }
  signup(obj) {
     
    const url = this.apiUrl + 'signup';

    return this.http.post(url, obj);

  }
}
