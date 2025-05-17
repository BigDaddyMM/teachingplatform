import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frenchlesson9Component } from './frenchlesson9.component';

describe('Frenchlesson9Component', () => {
  let component: Frenchlesson9Component;
  let fixture: ComponentFixture<Frenchlesson9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frenchlesson9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frenchlesson9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
