import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Islamiclesson5Component } from './islamiclesson5.component';

describe('Islamiclesson5Component', () => {
  let component: Islamiclesson5Component;
  let fixture: ComponentFixture<Islamiclesson5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Islamiclesson5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Islamiclesson5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
