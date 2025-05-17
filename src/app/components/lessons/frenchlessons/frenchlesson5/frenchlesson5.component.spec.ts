import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frenchlesson5Component } from './frenchlesson5.component';

describe('Frenchlesson5Component', () => {
  let component: Frenchlesson5Component;
  let fixture: ComponentFixture<Frenchlesson5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frenchlesson5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frenchlesson5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
