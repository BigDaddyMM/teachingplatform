import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frenchlesson8Component } from './frenchlesson8.component';

describe('Frenchlesson8Component', () => {
  let component: Frenchlesson8Component;
  let fixture: ComponentFixture<Frenchlesson8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frenchlesson8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frenchlesson8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
