import { Component } from '@angular/core';

@Component({
  selector: 'app-progressmonitor',
  templateUrl: './progressmonitor.component.html',
  styleUrls: ['./progressmonitor.component.css']
})
export class ProgressmonitorComponent {
    // Example teacher data - replace with actual API data
  students = [
    { name: 'John Doe', studentId: '1' },
    { name: 'Jane Smith', studentId: '2' }
  ];

  constructor() { }

  ngOnInit(): void {}

  viewStudentProgress(studentId: string) {
    console.log('View progress for student:', studentId);
    // Add navigation logic to student progress page
  }
}
