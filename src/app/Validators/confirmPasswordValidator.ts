import { AbstractControl, ValidationErrors, ValidatorFn ,FormGroup } from '@angular/forms';

export function mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as any as FormGroup; // safely cast

    const firstControl = formGroup.get(controlName);
    const secondControl = formGroup.get(matchingControlName);

    if (!firstControl || !secondControl) return null;

    return firstControl.value === secondControl.value
      ? null
      : { mustMatch: true };
  };
}
