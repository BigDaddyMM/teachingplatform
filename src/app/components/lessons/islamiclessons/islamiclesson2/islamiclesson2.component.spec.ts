import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Islamiclesson2Component } from './islamiclesson2.component';

describe('Islamiclesson2Component', () => {
  let component: Islamiclesson2Component;
  let fixture: ComponentFixture<Islamiclesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Islamiclesson2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Islamiclesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
