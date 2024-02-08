import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.scss'
})
export class CustomerLoginComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  navigateToCustomerHomePage() {
    this.router.navigate(['/customer-home']);
  }
  


}
