import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readwrite',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.css']
})
export class FrenchComponent {
   constructor(private router: Router) {}
    
      navigateTo(lesson: string): void {
        this.router.navigate([`/lessons/${lesson}`]);
      }
}
