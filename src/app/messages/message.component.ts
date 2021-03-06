import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../messages/message.service';

@Component({
    templateUrl: './message.component.html',
    styles: [
        '.message-row { margin-bottom: 10px }'
    ]
})
export class MessageComponent {

    constructor(private messageService: MessageService,
                private router: Router) { }

    getMessages() : string[] {
      return this.messageService.getMessages();
    }

    close(): void {
        // Close the popup.
    }
}
