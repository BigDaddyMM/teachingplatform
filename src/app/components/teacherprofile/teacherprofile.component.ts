import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherprofile',
  templateUrl: './teacherprofile.component.html',
  styleUrls: ['./teacherprofile.component.css']
})
export class TeacherprofileComponent {
  // Teacher data
  firstName: string = 'John';
  lastName: string = 'Smith';
  profilePictureUrl: string = 'https://img.freepik.com/premium-vector/girl-holding-pencil-picture-girl-holding-book_1013341-447639.jpg?semt=ais_hybrid';
  description: string = `Experienced educator passionate about helping students develop critical skills in mathematics, reading, writing, and communication.`;

  // Classes overview
  classesTaught = [
    'Mathematics',
    'Reading & Writing',
    'Communication'
  ];
  constructor(private router: Router) { }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  navigateToClass(className: string) {
    const routeMap: { [key: string]: string } = {
      'Mathematics': '/mathematics',
      'Reading & Writing': '/reading-writing',
      'Communication': '/communication'
    };
    this.router.navigate([routeMap[className]]);
  }
}
