import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'app-first-name',
  templateUrl: 'first-name-input.component.html',
  styleUrls: ['first-name-input.component.css']
})
export class FirstNameInputComponent {
  firstname = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.firstname.hasError('required') ? 'You must enter a value' : '';
  }
}
