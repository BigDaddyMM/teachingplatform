import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathlesson5Component } from './mathlesson5.component';

describe('Mathlesson5Component', () => {
  let component: Mathlesson5Component;
  let fixture: ComponentFixture<Mathlesson5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathlesson5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathlesson5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
