import { Component, OnInit } from '@angular/core';
import {FieldConfig} from '../../models/common/field.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
