import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/app/constants/route.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  navigateToSignUp(): void {
    this.router.navigate([Route.SIGNUP]);
  }
  onSubmit(): void {
    // After successful login, navigate to the homepage
    this.router.navigate([Route.HOME]);
  }
}
