import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  FormControl,
  FormGroup,
} from '@angular/forms';

export class CustomValidators {
  static adultAgeValidator(fieldName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const birthdate = control.value;

      if (!birthdate) {
        return null; 
      }

      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 18 || age > 110) {
        return { adultAge: { fieldName } };
      }

      return null;
    };
  }
}

export interface ValidationResult {
  [key: string]: boolean;
}

export class PasswordValidator {
  public static strong(control: FormControl): ValidationResult | null {
    const hasNumber = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);
    const valid = hasNumber && hasUpper && hasLower && hasSpecial;

    if (!valid) {
      return { strong: true };
    }
    return null;
  }
}
export const MatchPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const formGroup = control.parent;
  if (!formGroup) {
    return null;
  }

  const password = formGroup.get('password');
  const confirmPassword = formGroup.get('confirmPassword');

  if (
    !password ||
    !confirmPassword ||
    password.value !== confirmPassword.value
  ) {
    return { passwordMismatch: true };
  }

  return null;
};
