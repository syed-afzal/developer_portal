import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TextfieldComponent} from './common-components/textfield/textfield.component';
import {ButtonComponent} from './common-components/button/button.component';
import {DynamicFieldDirective} from './common-components/directives/dynamic-field.directive';
import {DynamicFormComponent} from './common-components/dynamic-form/dynamic-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslateService} from './services/translate.service';
import {TranslatePipe} from './pipes/translate.pipe';
import {LandingComponent} from './components/landing/landing.component';
import {AppRoutingModule} from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';

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
    TranslatePipe,
    LandingComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TextfieldComponent,
    ButtonComponent
  ]
})
export class AppModule {
}
