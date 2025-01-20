import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/app/constants/route.enum';

@Component({
  selector: 'app-signupstudent',
  templateUrl: './signupstudent.component.html',
  styleUrls: ['./signupstudent.component.css']
})
export class SignupstudentComponent {
  constructor(private router: Router) {}

  onSignup() {
    this.router.navigate([Route.HOME]);
  }

  navigateToSignIn() {
    this.router.navigate([Route.LOGIN]); // Navigate to the login page
  }
}
