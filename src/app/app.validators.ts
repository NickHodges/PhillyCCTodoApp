import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberValidators {
  static phone(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const PHONE_REGEXP = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
      control.markAsTouched();
      if (PHONE_REGEXP.test(control.value)) {
        return null;
      }
      return {
        phone: true
      };
    };
  }
}
