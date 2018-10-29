import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'app-telephone-input',
  templateUrl: 'telephone-input.component.html',
  styleUrls: ['telephone-input.component.css']
})
export class TelephoneInputComponent {
  telephone = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.telephone.hasError('required') ? 'You must enter a value' : '';
  }
}
