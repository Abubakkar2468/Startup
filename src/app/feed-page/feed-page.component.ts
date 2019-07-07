import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';
import { CommonService } from '../services/common.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.sass']
})
export class FeedPageComponent implements OnInit {

  message: any = '';
  messages: String[] = [];
  activeUser = [];
  receiverId = '';
  user: any = '';
  openChat = [];

  constructor(private chatService: ChatServiceService, private serv: CommonService, private cookieServ: CookieService) { }

  ngOnInit() {
    console.log(this.messages, this.cookieServ.get('io'), JSON.parse(window.localStorage.getItem(btoa('user'))));
    this.user = JSON.parse(window.localStorage.getItem(btoa('user')));
    this.serv.user = this.user;
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        console.log('msg===', message);
        this.messages.push(message);
      });
      this.chatService.setUsers(this.user);
      // setTimeout(() => {
      //   console.log('hi====>');
      //   this.getActiveUsers();
      // }, 10000);
      this.chatService.getUsers().subscribe((users) => {
        console.log('userrrr', users);
        // this.activeUser = users['users'];
        this.activeUser = [];
        if (this.user) {
          users['users'].forEach((user, i) => {
            if (user.user._id !== this.user._id) {
              this.activeUser.push(user);
            }
          });
        }
      });
  }

  sendMessage( obj) {
    console.log(obj);
    this.chatService.sendMessage({s_mail: this.user.email, message: obj.msg, senderId: this.chatService.socket.id,
      receiverId: obj.id, r_mail: obj.user.email, time: new Date().getTime()});
    obj.msg = '';
  }

  getActiveUsers() {
    console.log('hi');
    this.serv.getActive().subscribe((users) => {
      this.activeUser = users['activeUsers'];
      console.log('hi====', users);
    });
  }

  getId(id) {
    this.receiverId = id;
  }

  openChatBox(obj) {
    if (this.openChat.length < 5 && this.openChat.length >= 0) {
      this.openChat.push(obj);
    }
  }
  removeChatBox(obj) {
    this.openChat.forEach((chat, i) => {
      if (chat.user._id === obj.user._id) {
        this.openChat.splice(i, 1);
      }
    });
  }
}
