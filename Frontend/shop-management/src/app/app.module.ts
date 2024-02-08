import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginPageComponent } from './auth/login/login-page/login-page.component';
import { CustomerLoginComponent } from './auth/login/components/customer-login/customer-login.component';
import { EmployeeLoginComponent } from './auth/login/components/employee-login/employee-login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageComponent,
    CustomerLoginComponent,
    EmployeeLoginComponent,
    CommonModule
  ],
  exports: [
    LoginPageComponent,
    CustomerLoginComponent,
    EmployeeLoginComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
