import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  classes = [
    { name: 'Mathematics', progress: 75, id: 'math' },
    { name: 'Reading & Writing', progress: 50, id: 'reading' },
    { name: 'Communication', progress: 85, id: 'comm' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {}

  continueClass(classId: string) {
    this.router.navigate(['/class', classId]); // Navigate to the class detail page
  }
}
