import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './employee-login.component.html',
  styleUrl: './employee-login.component.scss'
})
export class EmployeeLoginComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  navigateToEmployeeHomePage() {
    this.router.navigate(['/employee-home']);
  }
}
