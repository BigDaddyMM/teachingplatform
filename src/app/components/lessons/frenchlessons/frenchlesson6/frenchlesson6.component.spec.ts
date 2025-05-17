import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frenchlesson6Component } from './frenchlesson6.component';

describe('Frenchlesson6Component', () => {
  let component: Frenchlesson6Component;
  let fixture: ComponentFixture<Frenchlesson6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frenchlesson6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frenchlesson6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
