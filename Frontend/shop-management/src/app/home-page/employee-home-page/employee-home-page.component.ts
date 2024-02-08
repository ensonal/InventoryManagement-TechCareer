import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-employee-home-page',
  standalone: true,
  imports: [MatCardModule, MatSidenavModule, MatIconModule],
  templateUrl: './employee-home-page.component.html',
  styleUrl: './employee-home-page.component.scss'
})
export class EmployeeHomePageComponent {

}
