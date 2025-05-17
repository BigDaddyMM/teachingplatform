import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Islamiclesson10Component } from './islamiclesson10.component';

describe('Islamiclesson10Component', () => {
  let component: Islamiclesson10Component;
  let fixture: ComponentFixture<Islamiclesson10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Islamiclesson10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Islamiclesson10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
