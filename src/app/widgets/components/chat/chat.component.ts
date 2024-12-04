import { AfterViewInit, Component, ElementRef,EventEmitter,Input,Output,ViewChild } from '@angular/core';

export interface Message{
  sender:string;
  text:string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements AfterViewInit{

  @ViewChild('messageContainer') messageContainer!: ElementRef;

  @Input()
  messages!:Message[];
  @Output() messagesChange = new EventEmitter<Message[]>();

 
  @Input()
  onSend!:Function;

 /*  messages = [
    { sender: 'Lucario78', text: 'Hello, I can\'t download' },
    { sender: 'You', text: 'Hi!,How can I help you?' },
  ]; */

  newMessage: string = '';

  ngAfterViewInit() {
    // Asegura que los mensajes ya existentes (si hay) estén en la posición correcta al cargar
    this.scrollToBottom();
  }

  private scrollToBottom() {
    try {
      const container = this.messageContainer.nativeElement;
      container.scrollTop = container.scrollHeight; // Desplaza al final
    } catch (err) {
      console.error('Error al desplazar', err);
    }
  }


  send(): void {
    if (this.newMessage.trim()) {
      this.messages.push({ sender: 'You', text: this.newMessage.trim() });
      this.messagesChange.emit(this.messages);
      this.onSend();
      this.newMessage = '';
      setTimeout(() => this.scrollToBottom(), 0);
    } 
  }

}


