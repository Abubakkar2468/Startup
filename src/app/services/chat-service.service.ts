import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  private url = "http://192.168.43.11:8000";
  public socket;

  constructor() {
    this.socket = io(this.url);
    console.log(this.socket);
  }

  sendMessage(msg) {
    console.log('========', msg);
    this.socket.emit('new-message', msg);
  }

  getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('msg', (message) => {
        console.log('======', message)
          observer.next(message);
      });
  });
  }
}
