import { Component, OnInit } from '@angular/core';
import { Message } from '../_model/message';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages;
  container='unread'
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    this.loadMessages(this.container);
  }

  loadMessages(event){
    console.log(event)
    this.messageService.getMessages(event).subscribe(response=>{
      console.log(response.body)
      this.messages=response.body;
       
    })
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(() => {
      this.messages.splice(this.messages.findIndex(m => m.id === id), 1);
    })
  }

}
