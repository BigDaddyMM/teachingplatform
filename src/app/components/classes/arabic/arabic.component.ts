import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-communication',
  templateUrl: './arabic.component.html',
  styleUrls: ['./arabic.component.css']
})
export class ArabicComponent {

  constructor(private router: Router) {}
  
    navigateTo(lesson: string): void {
      this.router.navigate([`/lessons/${lesson}`]);
    }
}
