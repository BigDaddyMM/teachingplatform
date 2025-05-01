import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {



  constructor(private router: Router) {}

  navigateTo(lesson: string): void {
    this.router.navigate([`/lessons/${lesson}`]);
  }
}
