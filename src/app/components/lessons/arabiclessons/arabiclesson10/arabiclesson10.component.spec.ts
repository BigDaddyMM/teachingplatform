import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arabiclesson10Component } from './arabiclesson10.component';

describe('Arabiclesson10Component', () => {
  let component: Arabiclesson10Component;
  let fixture: ComponentFixture<Arabiclesson10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arabiclesson10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arabiclesson10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
