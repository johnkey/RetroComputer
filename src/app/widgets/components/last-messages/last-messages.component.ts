import { Component } from '@angular/core';

@Component({
  selector: 'app-last-messages',
  templateUrl: './last-messages.component.html',
  styleUrl: './last-messages.component.scss'
})
export class LastMessagesComponent {


  messages = [
    { sender: 'Anita', text: 'Amazing!!' },
    { sender: 'Rolo33', text: 'What fun!!!' },
    { sender: 'Anita', text: 'you are so funny' },
    { sender: 'Lucario78', text: 'Has anyone finished Space Invaders?' },
    { sender: 'john_key', text: 'It\'s GOAT' }
    
  ];

}
