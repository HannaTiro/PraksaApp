
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
@ViewChild('messageForm')messageForm:NgForm; ///reset form after sending message
@Input() messages:Message[];
@Input() username:string;
messageContent:string;

  constructor(public messageService:MessageService) //public so we can access on .html component
  { 

  }

  ngOnInit(): void {

  }
sendMessage()
{
  this.messageService.sendMessage(this.username,this.messageContent).then(()=>{

    this.messageForm.reset(); //reset form after sending message
  })
}
}
