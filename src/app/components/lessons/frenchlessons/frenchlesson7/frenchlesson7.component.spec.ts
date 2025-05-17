import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frenchlesson7Component } from './frenchlesson7.component';

describe('Frenchlesson7Component', () => {
  let component: Frenchlesson7Component;
  let fixture: ComponentFixture<Frenchlesson7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frenchlesson7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frenchlesson7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
