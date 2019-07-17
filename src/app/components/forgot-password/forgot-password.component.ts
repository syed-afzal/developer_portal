import {Component, OnInit} from '@angular/core';
import {ForgotPassword} from '../../forms-config/forgot-password.form.fields';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  formConfig;

  constructor() {
    this.formConfig = ForgotPassword;
  }

  submit(e) {
    console.log('Form Body : ', e);
  }
  getCurrentYear() {
    return new Date().getFullYear();
  }

  ngOnInit() {
  }

}
