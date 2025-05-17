import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arabiclesson7Component } from './arabiclesson7.component';

describe('Arabiclesson7Component', () => {
  let component: Arabiclesson7Component;
  let fixture: ComponentFixture<Arabiclesson7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arabiclesson7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arabiclesson7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
