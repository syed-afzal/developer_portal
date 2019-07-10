import { Component, OnInit } from '@angular/core';
import {FieldConfig} from '../../field.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
