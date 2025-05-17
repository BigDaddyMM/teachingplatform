import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathlesson8Component } from './mathlesson8.component';

describe('Mathlesson8Component', () => {
  let component: Mathlesson8Component;
  let fixture: ComponentFixture<Mathlesson8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathlesson8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathlesson8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
