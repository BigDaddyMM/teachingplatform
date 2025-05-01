import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsGridComponent } from './lessons-grid.component';

describe('LessonsGridComponent', () => {
  let component: LessonsGridComponent;
  let fixture: ComponentFixture<LessonsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
