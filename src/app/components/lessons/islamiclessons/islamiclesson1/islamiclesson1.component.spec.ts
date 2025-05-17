import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Islamiclesson1Component } from './islamiclesson1.component';

describe('Islamiclesson1Component', () => {
  let component: Islamiclesson1Component;
  let fixture: ComponentFixture<Islamiclesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Islamiclesson1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Islamiclesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
