
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/_model/message';
import { AccountService } from 'src/app/_services/account.service';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: Message[];
  @Input() username: string;
  messageContent: string;
  loading= false;

  constructor(public messageService: MessageService, public accountService: AccountService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.loading=true;
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      // this.messages.push(message);
      this.messageForm.reset();
    })
    .finally(()=>this.loading=false)
  }

}
