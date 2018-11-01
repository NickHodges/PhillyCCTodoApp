import { AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ControlContainer,
  FormGroupDirective
} from '@angular/forms';

@Component({
  selector: 'app-last-name-input',
  templateUrl: 'last-name-input.component.html',
  styleUrls: ['last-name-input.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class LastNameInputComponent implements OnInit {
  lastNameControl: AbstractControl = new FormControl('', Validators.required);
  constructor(private parent: FormGroupDirective) {}

  ngOnInit() {
    this.parent.form.addControl('lastNameControl', this.lastNameControl);
  }

  getErrorMessage() {
    return this.lastNameControl.hasError('required')
      ? 'You must enter a value'
      : '';
  }
}
