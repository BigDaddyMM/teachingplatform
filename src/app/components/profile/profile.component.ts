import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // User data
  firstName: string = 'Jane';
  lastName: string = 'Doe';
  profilePictureUrl: string = 'https://i.pinimg.com/736x/20/7c/9a/207c9a0c107ec57c0d97d5ae0bbbc851.jpg';

  // Class progress data
  classProgress = [
    { className: 'Mathematics', progress: 75 },
    { className: 'Reading & Writing', progress: 60 },
    { className: 'Communication', progress: 85 }
  ];

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
