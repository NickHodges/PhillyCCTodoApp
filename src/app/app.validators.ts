import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberValidators {

  static phoneValidator(): ValidatorFn {
     return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.pristine) {
        return null;
      }
      const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
      control.markAsTouched();
      if (PHONE_REGEXP.test(control.value)) {
        return {
          phone: true
        };
      }
      return null;
    };
  }
}
