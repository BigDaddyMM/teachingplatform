import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arabiclesson2Component } from './arabiclesson2.component';

describe('Arabiclesson2Component', () => {
  let component: Arabiclesson2Component;
  let fixture: ComponentFixture<Arabiclesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arabiclesson2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arabiclesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
