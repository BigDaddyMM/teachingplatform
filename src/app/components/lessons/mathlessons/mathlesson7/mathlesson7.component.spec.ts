import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathlesson7Component } from './mathlesson7.component';

describe('Mathlesson7Component', () => {
  let component: Mathlesson7Component;
  let fixture: ComponentFixture<Mathlesson7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathlesson7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathlesson7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
