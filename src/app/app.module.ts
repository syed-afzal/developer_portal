import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextfieldComponent } from './common-components/textfield/textfield.component';
import { ButtonComponent } from './common-components/button/button.component';
import { DynamicFieldDirective } from './common-components/directives/dynamic-field.directive';
import { DynamicFormComponent } from './common-components/dynamic-form/dynamic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslateService} from './services/translate.service';
import { TranslatePipe } from './pipes/translate.pipe';

export function setupTranslateFactory(
  service: TranslateService): () => void {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    TextfieldComponent,
    ButtonComponent,
    LoginComponent,
    ForgotPasswordComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: APP_INITIALIZER,
    useFactory: setupTranslateFactory,
    deps: [ TranslateService ],
    multi: true
  }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TextfieldComponent,
    ButtonComponent
  ]
})
export class AppModule { }
