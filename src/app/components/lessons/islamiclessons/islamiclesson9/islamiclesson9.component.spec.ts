import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Islamiclesson9Component } from './islamiclesson9.component';

describe('Islamiclesson9Component', () => {
  let component: Islamiclesson9Component;
  let fixture: ComponentFixture<Islamiclesson9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Islamiclesson9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Islamiclesson9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
