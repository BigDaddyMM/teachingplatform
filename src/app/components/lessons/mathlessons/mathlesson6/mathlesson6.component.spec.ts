import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathlesson6Component } from './mathlesson6.component';

describe('Mathlesson6Component', () => {
  let component: Mathlesson6Component;
  let fixture: ComponentFixture<Mathlesson6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathlesson6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathlesson6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
