import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arabiclesson1Component } from './arabiclesson1.component';

describe('Arabiclesson1Component', () => {
  let component: Arabiclesson1Component;
  let fixture: ComponentFixture<Arabiclesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arabiclesson1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arabiclesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
