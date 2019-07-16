import { Component, OnInit } from '@angular/core';
import {LoginFormConfig} from '../../forms-config/login.form.fields';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formConfig;
  constructor() {
    this.formConfig = LoginFormConfig;
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
