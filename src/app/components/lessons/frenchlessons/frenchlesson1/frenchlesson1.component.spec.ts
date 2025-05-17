import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frenchlesson1Component } from './frenchlesson1.component';

describe('Frenchlesson1Component', () => {
  let component: Frenchlesson1Component;
  let fixture: ComponentFixture<Frenchlesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frenchlesson1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frenchlesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
