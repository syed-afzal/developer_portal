import {FieldConfig} from '../models/common/field.interface';
import {Validators} from '@angular/forms';

export const LoginFormConfig: FieldConfig[] = [
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
    type: 'button',
    label: 'Login',
    inputType: 'submit'
  }
];
