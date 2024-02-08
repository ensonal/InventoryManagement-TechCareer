import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './auth/login/components/employee-login/employee-login.component';
import { CustomerLoginComponent } from './auth/login/components/customer-login/customer-login.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeLoginComponent },
  { path: 'customer', component: CustomerLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
