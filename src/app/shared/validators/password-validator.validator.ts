import { AbstractControl, ValidationErrors } from '@angular/forms';

function passwordStrength(control: AbstractControl): ValidationErrors | null {
  const password = control.value;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const isPasswordValid =
    hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
  const validationMessage = {
    hasUpperCase: !hasUpperCase,
    hasLowerCase: !hasLowerCase,
    hasNumbers: !hasNumbers,
    hasSpecialChar: !hasSpecialChar,
  };

  return isPasswordValid ? null : validationMessage;
}

function matchPassword(control: AbstractControl): ValidationErrors | null {
  const confirmPassword = control.value;
  const password = control?.parent?.get('password')?.value;

  if (!password) null;
  return confirmPassword === password ? null : { mismatch: true };
}

const passwordValidators = {
  passwordStrength,
  matchPassword,
};

export default passwordValidators;
