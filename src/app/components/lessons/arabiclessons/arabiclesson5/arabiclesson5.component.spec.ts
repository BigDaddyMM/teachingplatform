import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arabiclesson5Component } from './arabiclesson5.component';

describe('Arabiclesson5Component', () => {
  let component: Arabiclesson5Component;
  let fixture: ComponentFixture<Arabiclesson5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arabiclesson5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arabiclesson5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
