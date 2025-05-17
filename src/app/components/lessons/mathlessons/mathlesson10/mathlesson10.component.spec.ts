import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathlesson10Component } from './mathlesson10.component';

describe('Mathlesson10Component', () => {
  let component: Mathlesson10Component;
  let fixture: ComponentFixture<Mathlesson10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathlesson10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathlesson10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
