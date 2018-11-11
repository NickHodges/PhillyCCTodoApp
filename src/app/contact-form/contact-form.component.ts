import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactComponent {
  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({});
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log('valid:', this.formModel.value);
    } else {
      console.log('invalid: ', this.formModel.value);
    }
  }
}
