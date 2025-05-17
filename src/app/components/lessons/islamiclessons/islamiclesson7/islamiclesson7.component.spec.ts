import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Islamiclesson7Component } from './islamiclesson7.component';

describe('Islamiclesson7Component', () => {
  let component: Islamiclesson7Component;
  let fixture: ComponentFixture<Islamiclesson7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Islamiclesson7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Islamiclesson7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
