import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    private messages: string[] = [];

    addMessage(message: string): void {
        const currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }

    getMessages() : string[] {
      return this.messages;
}
}
