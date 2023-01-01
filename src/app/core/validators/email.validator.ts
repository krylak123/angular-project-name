import { AbstractControl } from '@angular/forms';

export const emailValidator = (
  control: AbstractControl
): { email: true } | null => {
  const { value } = control;
  const emailRegex = new RegExp(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  );

  return emailRegex.test(value) ? null : { email: true };
};
