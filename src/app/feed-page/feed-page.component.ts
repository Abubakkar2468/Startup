import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';
@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.sass']
})
export class FeedPageComponent implements OnInit {

  message: String = '';
  messages: String[] = [];

  constructor(private chatService: ChatServiceService) { }

  ngOnInit() {
    console.log(this.messages);
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        console.log('msg===', message);
        this.messages.push(message);
      });
  }

  sendMessage(msg) {
    console.log(msg);
    this.chatService.sendMessage(msg);
  }

}
