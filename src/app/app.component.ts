import {Component, ViewChild} from '@angular/core';
import {Validators} from '@angular/forms';
import {FieldConfig} from './models/common/field.interface';
import {DynamicFormComponent} from './common-components/dynamic-form/dynamic-form.component';
import {ToasterService} from './services/toaster.service';
import {LoginFormConfig} from './forms-config/login.form.fields';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DynamicFormComponent, {static: false}) form: DynamicFormComponent;
  formConfig;
  constructor(private toaster: ToasterService) {
    this.formConfig = LoginFormConfig;
  }

  submit(e) {
    console.log('Form Body : ', e);
  }
}
