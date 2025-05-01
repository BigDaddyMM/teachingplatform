import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  subjects = [
    {
      id: 'mathematics',
      name: 'الرياضيات',
      progress: 85,
      status: 'مكتمل',
      thumbnail: '/assets/images/math.png'
    },
    {
      id: 'arabic',
      name: 'العربية',
      progress: 60,
      status: 'قيد التقدم',
      thumbnail: '/assets/images/arabic.png'
    },
    {
      id: 'french',
      name: 'الفرنسية',
      progress: 30,
      status: 'قيد التقدم',
      thumbnail: '/assets/images/french.png'
    },
    {
      id: 'science',
      name: 'الإيقاظ العلمي',
      progress: 0,
      status: 'لم يبدأ بعد',
      thumbnail: '/assets/images/science.png'
    },
    {
      id: 'islamic-education',
      name: 'التربية الاسلامية',
      progress: 75,
      status: 'قيد التقدم',
      thumbnail: '/assets/images/islam.png'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(subjectId: string): void {
    this.router.navigate(['/class', subjectId]);
  }
}
