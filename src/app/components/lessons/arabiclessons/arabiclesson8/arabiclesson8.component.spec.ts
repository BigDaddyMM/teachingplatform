import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arabiclesson8Component } from './arabiclesson8.component';

describe('Arabiclesson8Component', () => {
  let component: Arabiclesson8Component;
  let fixture: ComponentFixture<Arabiclesson8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arabiclesson8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arabiclesson8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
