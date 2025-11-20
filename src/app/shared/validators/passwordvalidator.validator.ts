import { AbstractControl, ValidationErrors } from '@angular/forms';

function passwordStrength(control: AbstractControl): ValidationErrors | null {
  //

  const password = control.value;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasMinLength = password.length >= 8;

  const isPasswordValid =
    hasUpperCase &&
    hasLowerCase &&
    hasNumbers &&
    hasSpecialChar &&
    hasMinLength;

  const validationErros = {
    uppercase: !hasUpperCase,
    lowercase: !hasLowerCase,
    numbers: !hasNumbers,
    specialChar: !hasSpecialChar,
    minLength: !hasMinLength,
  };

  return isPasswordValid ? null : validationErros;
}

function confirmPassword(control: AbstractControl): ValidationErrors | null {
  const confirmPassword = control.value;
  const password = control.parent?.get('password')?.value;

  if (!password || !confirmPassword) {
    return null;
  }

  return confirmPassword === password ? null : { 'mismatch': true };
}

const passwordValidators111 = {
  passwordStrength,
  confirmPassword,
};
export default passwordValidators111;
