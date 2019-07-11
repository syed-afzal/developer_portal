import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, ValidationErrors} from '@angular/forms';
import {FieldConfig, Validator} from '../../field.interface';
import {ToasterService} from '../../services/toaster.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  errSummary: string = '';

  constructor(private fb: FormBuilder,
              private toaster: ToasterService) {
  }

  get value() {
    return this.form.value;
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === 'button') {
        return;
      }
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.getFormValidationErrors();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
      this.toaster.showToast('success', 'Successfully logged in');
    } else {
      this.validateAllFormFields(this.form);
      this.toaster.showToast('error', this.errSummary);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({onlySelf: true});
    });
  }

  getFormValidationErrors() {
    this.errSummary = '';
    Object.keys(this.form.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          if (keyError === 'required') {
            this.errSummary += `*${key} is required </br>`;
          } else if (keyError === 'pattern') {
            this.errSummary += `*${key} is not valid</br>`;
          }
        });
      }
    });
  }


  ngOnInit() {
    this.form = this.createControl();
  }

}
