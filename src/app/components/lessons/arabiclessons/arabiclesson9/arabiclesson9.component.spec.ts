import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arabiclesson9Component } from './arabiclesson9.component';

describe('Arabiclesson9Component', () => {
  let component: Arabiclesson9Component;
  let fixture: ComponentFixture<Arabiclesson9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arabiclesson9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arabiclesson9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
