import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frenchlesson3Component } from './frenchlesson3.component';

describe('Frenchlesson3Component', () => {
  let component: Frenchlesson3Component;
  let fixture: ComponentFixture<Frenchlesson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frenchlesson3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frenchlesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
