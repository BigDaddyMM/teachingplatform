import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Islamiclesson8Component } from './islamiclesson8.component';

describe('Islamiclesson8Component', () => {
  let component: Islamiclesson8Component;
  let fixture: ComponentFixture<Islamiclesson8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Islamiclesson8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Islamiclesson8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
