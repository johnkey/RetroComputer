import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-command-modal',
  templateUrl: './command-modal.component.html',
  styleUrls: ['./command-modal.component.scss']
})
export class CommandModalComponent {

  @ViewChild('commandInput') commandInput!: ElementRef;

  command: string = '';
  terminalOutput: string[] = [];
  prompt: string = 'C:\\Windows\\System32>';
  cursorPosition:number=0;
  

  constructor(public dialogRef: MatDialogRef<CommandModalComponent>) { }

  executeCommand() {
    if (this.command.trim()) {
      this.terminalOutput.push(`${this.prompt} ${this.command}`);
      // Simulate a DDoS-like output (or any command logic)
      if (this.command.toLowerCase().includes('ddos')) {
        this.terminalOutput.push('Executing DDoS attack...');
        for (let i = 0; i < 10; i++) {
          this.terminalOutput.push('Attacking target: 192.168.1.' + (100 + i));
        }
      } if (this.command.toLowerCase().includes('dir') || this.command.toLowerCase().includes('ls')){
        this.terminalOutput.push('File1.txt');
        this.terminalOutput.push('File2.txt');
      
      } else if (this.command.toLowerCase().includes('cp')){
        this.terminalOutput.push('File1.txt copied');     
      }
      else {
        this.terminalOutput.push(`Command not found: ${this.command}`);
      }
      this.command = ''; // Reset command input
      this.cursorPosition = 0;
    }
  }

  close() {
    this.dialogRef.close(); // Cierra el modal
  }

  focusInput() {
    this.commandInput.nativeElement.focus();
  }

  updateCursorPosition(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const textWidth = this.getTextWidth(inputElement.value, inputElement);
    this.cursorPosition = textWidth;
  }

  getTextWidth(text: string, input: HTMLInputElement): number {
    // Crear un canvas temporal para medir el ancho del texto
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const style = getComputedStyle(input);
    context.font = style.font;
    return context.measureText(text).width;
  }
  
}


