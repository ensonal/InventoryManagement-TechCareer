import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './auth/login/components/employee-login/employee-login.component';
import { CustomerLoginComponent } from './auth/login/components/customer-login/customer-login.component';
import { CustomerHomePageComponent } from './home-page/customer-home-page/customer-home-page.component';
import { EmployeeHomePageComponent } from './home-page/employee-home-page/employee-home-page.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeLoginComponent },
  { path: 'customer', component: CustomerLoginComponent },
  { path: 'customer-home', component: CustomerHomePageComponent },
  { path: 'employee-home', component: EmployeeHomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
