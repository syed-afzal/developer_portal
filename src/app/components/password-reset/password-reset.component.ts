import {Component, OnInit} from '@angular/core';
import {PasswordResetFormConfig} from '../../forms-config/password-reset.form.fields';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  formConfig;

  constructor() {
    this.formConfig = PasswordResetFormConfig;
  }

  ngOnInit() {
  }

  submit(e) {
    console.log('Form Body : ', e);
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }

}
