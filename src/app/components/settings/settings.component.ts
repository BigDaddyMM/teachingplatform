import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  name: string = 'John Smith';
  email: string = 'john@example.com';
  password: string = '';
  description: string = '';
  profilePicture: any;
  classCode: string = '';
  newClassName: string = '';
  
  isTeacher: boolean = true; // Example value, can be set based on user type
  isStudent: boolean = !this.isTeacher;

  updateName() {
    console.log('Name updated to:', this.name);
  }

  updateEmail() {
    console.log('Email updated to:', this.email);
  }

  updatePassword() {
    console.log('Password updated');
  }

  uploadProfilePicture(event: any) {
    this.profilePicture = event.target.files[0];
    console.log('Profile picture selected:', this.profilePicture);
  }

  saveProfilePicture() {
    console.log('Profile picture uploaded');
  }

  updateDescription() {
    console.log('Description updated to:', this.description);
  }

  joinClass() {
    console.log('Joined class with code:', this.classCode);
  }

  createClass() {
    console.log('Created class:', this.newClassName);
  }

  deleteProfile() {
    console.log('Profile deleted');
  }
}
