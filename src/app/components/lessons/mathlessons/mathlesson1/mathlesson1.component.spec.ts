import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathlesson1Component } from './mathlesson1.component';

describe('Mathlesson1Component', () => {
  let component: Mathlesson1Component;
  let fixture: ComponentFixture<Mathlesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathlesson1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathlesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
