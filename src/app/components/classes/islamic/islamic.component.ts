import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-islamic',
  templateUrl: './islamic.component.html',
  styleUrls: ['./islamic.component.css']
})
export class IslamicComponent {
 constructor(private router: Router) {}
  
    navigateTo(lesson: string): void {
      this.router.navigate([`/lessons/${lesson}`]);
    }
}
