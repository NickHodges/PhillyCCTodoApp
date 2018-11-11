import { AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ControlContainer,
  FormGroupDirective
} from '@angular/forms';

@Component({
  selector: 'app-first-name-input',
  templateUrl: 'first-name-input.component.html',
  styleUrls: ['first-name-input.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class FirstNameInputComponent implements OnInit {
  firstNameControl: AbstractControl = new FormControl('', Validators.required);
  constructor(private parent: FormGroupDirective) {}

  ngOnInit() {
    this.parent.form.addControl('firstNameControl', this.firstNameControl);
  }

  getErrorMessage() {
    return this.firstNameControl.hasError('required')
      ? 'You must enter a value'
      : '';
  }
}
