import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'app-message',
  templateUrl: 'message-input.component.html',
  styleUrls: ['message-input.component.css']
})
export class MessageInputComponent {
  themessage = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.themessage.hasError('required') ? 'You must enter a value' : '';
  }
}
