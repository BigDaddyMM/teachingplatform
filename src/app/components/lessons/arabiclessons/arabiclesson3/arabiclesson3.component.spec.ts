import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arabiclesson3Component } from './arabiclesson3.component';

describe('Arabiclesson3Component', () => {
  let component: Arabiclesson3Component;
  let fixture: ComponentFixture<Arabiclesson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arabiclesson3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arabiclesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
