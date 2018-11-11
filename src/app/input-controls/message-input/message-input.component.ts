import { AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ControlContainer,
  FormGroupDirective
} from '@angular/forms';

@Component({
  selector: 'app-message-input',
  templateUrl: 'message-input.component.html',
  styleUrls: ['message-input.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class MessageInputComponent implements OnInit {
  messageControl: AbstractControl = new FormControl('', [
    Validators.required,
    Validators.minLength(15)
  ]);
  constructor(private parent: FormGroupDirective) {}

  ngOnInit() {
    this.parent.form.addControl('messageControl', this.messageControl);
  }

  getErrorMessage() {
    return this.messageControl.hasError('required')
      ? 'You must enter a value of at least 15 characters'
      : '';
  }
}
