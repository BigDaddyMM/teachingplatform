import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/app/constants/route.enum';

@Component({
  selector: 'app-signupteacher',
  templateUrl: './signupteacher.component.html',
  styleUrls: ['./signupteacher.component.css']
})
export class SignupteacherComponent {
  selectedSubject: string = '';

  constructor(private router: Router) {}

  onSignup() {
    // Handle the signup form submission here
    console.log('Signup form submitted!');
    console.log('Selected Subject:', this.selectedSubject);
  }

  navigateToSignIn() {
    this.router.navigate([Route.LOGIN]); // Navigate to the login page
  }
}
