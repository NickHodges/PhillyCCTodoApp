import { AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ControlContainer,
  FormGroupDirective
} from '@angular/forms';
import { NumberValidators } from '../../app.validators';

@Component({
  selector: 'app-telephone-input',
  templateUrl: 'telephone-input.component.html',
  styleUrls: ['telephone-input.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class TelephoneInputComponent implements OnInit {
  telephoneControl: AbstractControl = new FormControl('', [
    Validators.required,
    NumberValidators.phone()
  ]);
  constructor(private parent: FormGroupDirective) {}

  ngOnInit() {
    this.parent.form.addControl('telephoneControl', this.telephoneControl);
  }

  getErrorMessage() {
    return this.telephoneControl.hasError('required')
      ? 'You must enter a telephone number'
      : '';
  }
}
