import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frenchlesson2Component } from './frenchlesson2.component';

describe('Frenchlesson2Component', () => {
  let component: Frenchlesson2Component;
  let fixture: ComponentFixture<Frenchlesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frenchlesson2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frenchlesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
