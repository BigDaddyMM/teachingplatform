import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/app/constants/route.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate([Route.HOME]); // Navigate to Home
  }

  navigateToProgress() {
    this.router.navigate([Route.PROGRESS]); // Navigate to Progress
  }

  navigateToProfile() {
    this.router.navigate([Route.PROFILE]); // Navigate to My Profile
  }

  navigateToSettings() {
    this.router.navigate([Route.SETTINGS]); // Navigate to Settings
  }

  logout() {
    // Handle logout logic here
    console.log('Logged out!');
    this.router.navigate([Route.LOGIN]); // Navigate to Login after logout
  }
}
