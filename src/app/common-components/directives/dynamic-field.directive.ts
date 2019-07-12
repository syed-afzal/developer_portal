import {Directive} from '@angular/core';
import {
  ComponentFactoryResolver, ComponentRef, Input, OnInit,
  ViewContainerRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../../models/common/field.interface';
import {TextfieldComponent} from '../textfield/textfield.component';
import {ButtonComponent} from '../button/button.component';

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  componentMapper: any = {
    input: TextfieldComponent,
    button: ButtonComponent
  };
  componentRef: any;
  @Input() field: FieldConfig;
  @Input() group: FormGroup;


  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) {
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      this.componentMapper[this.field.type]
    );

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
