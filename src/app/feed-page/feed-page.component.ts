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

  message: String = '';
  messages: String[] = [];

  constructor(private chatService: ChatServiceService, private serv: CommonService, private cookieServ: CookieService) { }

  ngOnInit() {
    console.log(this.messages, this.cookieServ.get('io'));
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        console.log('msg===', message);
        this.messages.push(message);
      });
  }

  sendMessage(msg) {
    console.log(msg);
    this.chatService.sendMessage({email: 'bakkar@yopmail.com', message: msg});
  }

}
