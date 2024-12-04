import { Component, Input } from '@angular/core';
import { Message } from '../chat/chat.component';

@Component({
  selector: 'app-last-messages',
  templateUrl: './last-messages.component.html',
  styleUrl: './last-messages.component.scss'
})
export class LastMessagesComponent {

  @Input()
  messages!:Message[];

}
