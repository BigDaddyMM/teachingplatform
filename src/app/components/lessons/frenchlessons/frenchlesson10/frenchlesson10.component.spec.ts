import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frenchlesson10Component } from './frenchlesson10.component';

describe('Frenchlesson10Component', () => {
  let component: Frenchlesson10Component;
  let fixture: ComponentFixture<Frenchlesson10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frenchlesson10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frenchlesson10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
