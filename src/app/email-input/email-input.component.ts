import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'app-email-input',
  templateUrl: 'email-input.component.html',
  styleUrls: ['email-input.component.css']
})
export class EmailInputComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
        ? 'Not a valid email'
        : '';
  }
}
