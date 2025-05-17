import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathlesson2Component } from './mathlesson2.component';

describe('Mathlesson2Component', () => {
  let component: Mathlesson2Component;
  let fixture: ComponentFixture<Mathlesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathlesson2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathlesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
