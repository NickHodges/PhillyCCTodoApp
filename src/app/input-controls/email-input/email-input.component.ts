import { AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ControlContainer,
  FormGroupDirective
} from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: 'email-input.component.html',
  styleUrls: ['email-input.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class EmailInputComponent implements OnInit {
  emailControl: AbstractControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  constructor(private parent: FormGroupDirective) {}

  ngOnInit() {
    this.parent.form.addControl('emailControl', this.emailControl);
  }

  getErrorMessage() {
    return this.emailControl.hasError('required')
      ? 'You must enter a value'
      : this.emailControl.hasError('email')
        ? 'Not a valid email'
        : '';
  }
}
