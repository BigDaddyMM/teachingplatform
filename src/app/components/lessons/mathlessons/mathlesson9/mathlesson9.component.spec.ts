import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathlesson9Component } from './mathlesson9.component';

describe('Mathlesson9Component', () => {
  let component: Mathlesson9Component;
  let fixture: ComponentFixture<Mathlesson9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathlesson9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathlesson9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
