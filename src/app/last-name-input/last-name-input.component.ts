import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'app-last-name',
  templateUrl: 'last-name-input.component.html',
  styleUrls: ['last-name-input.component.css']
})
export class LastNameInputComponent {
  lastname = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.lastname.hasError('required') ? 'You must enter a value' : '';
  }
}
