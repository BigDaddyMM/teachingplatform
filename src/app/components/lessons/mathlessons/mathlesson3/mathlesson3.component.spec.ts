import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathlesson3Component } from './mathlesson3.component';

describe('Mathlesson3Component', () => {
  let component: Mathlesson3Component;
  let fixture: ComponentFixture<Mathlesson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathlesson3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathlesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
