import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Islamiclesson3Component } from './islamiclesson3.component';

describe('Islamiclesson3Component', () => {
  let component: Islamiclesson3Component;
  let fixture: ComponentFixture<Islamiclesson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Islamiclesson3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Islamiclesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
