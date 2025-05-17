import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {
   constructor(private router: Router) {}
    
      navigateTo(lesson: string): void {
        this.router.navigate([`/lessons/${lesson}`]);
      }
}
