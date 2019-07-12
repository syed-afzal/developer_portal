import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextfieldComponent } from './common-components/textfield/textfield.component';
import { DynamicFieldDirective } from './common-components/directives/dynamic-field.directive';
import { DynamicFormComponent } from './common-components/dynamic-form/dynamic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    TextfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TextfieldComponent
  ]
})
export class AppModule { }
