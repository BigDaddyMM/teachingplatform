import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/app/constants/route.enum';

@Component({
  selector: 'app-signupselect',
  templateUrl: './signupselect.component.html',
  styleUrls: ['./signupselect.component.css']
})
export class SignupselectComponent {
  constructor(private router: Router) {}

  navigateToTeacherSignup(): void {
    this.router.navigate([Route.TEACHERSU]); // Replace with your actual route
  }

  navigateToStudentSignup(): void {
    this.router.navigate([Route.STUDENTSU]); // Replace with your actual route
  }
}
