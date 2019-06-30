import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private url = "http://192.168.43.11:8000";
  username: any = null;
  user: any = null;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(window.localStorage.getItem(btoa('user')));
   }


  getActive() {
    const url = this.url + '/api/users/active';
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Token ' + this.user.token);

    return this.http.get(url, {headers: headers});
  }
}
