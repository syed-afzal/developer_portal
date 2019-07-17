import {FieldConfig} from '../models/common/field.interface';
import {FormGroup, Validators} from '@angular/forms';

export const PasswordResetFormConfig: FieldConfig[] = [
  {
    type: 'input',
    label: 'Email',
    inputType: 'email',
    name: 'email',
    icon: 'fa fa-at',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Email Required'
      },
      {
        name: 'pattern',
        validator: Validators.pattern(
          '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
        ),
        message: 'Invalid email'
      }
    ]
  },
  {
    type: 'input',
    icon: 'fa fa-key',
    label: 'Password',
    inputType: 'password',
    name: 'password',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required'
      }
    ]
  },
  {
    type: 'input',
    icon: 'fa fa-key',
    label: 'ConfirmPassword',
    inputType: 'password',
    name: 'confirmpassword',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required'
      },
    ],
    validator(passwordKey: string, passwordConfirmationKey: string) {
      return (group: FormGroup) => {
        const passwordInput = group.controls[passwordKey];
        const passwordConfirmationInput = group.controls[passwordConfirmationKey];
        if (passwordInput.value !== passwordConfirmationInput.value) {
          return passwordConfirmationInput.setErrors({...passwordConfirmationInput.errors, notEquivalent: true});
        }
      };
    }
  },
  {
    type: 'input',
    icon: 'fa fa-key',
    label: 'PasswordResetCode',
    inputType: 'password',
    name: 'passwordResetUUID',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required'
      }
    ]
  },
  {
    type: 'button',
    label: 'SetNewPassword',
    inputType: 'submit'
  },
  {
    type: 'button',
    label: 'ResendEmail',
    inputType: 'button'
  },
];
