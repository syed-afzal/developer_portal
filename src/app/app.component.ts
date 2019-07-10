import {Component, ViewChild} from '@angular/core';
import {Validators} from '@angular/forms';
import {FieldConfig} from './field.interface';
import {DynamicFormComponent} from './common-components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'developer-portal';
  @ViewChild(DynamicFormComponent, {static: false}) form: DynamicFormComponent;


  regConfig: FieldConfig[] = [
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
    }
  ];

  submit(e) {
    console.log('Form Body : ', e);
  }
}
