import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ MatButtonModule, RouterOutlet, CommonModule ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{
  login: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(){
    this.login = false;
  }

  navigateToEmployee(){
    this.login = true;
    this.router.navigate(['/employee']);
  }

  navigateToCustomer(){
    this.login = true;
    this.router.navigate(['/customer']);
  }

}
