import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Islamiclesson6Component } from './islamiclesson6.component';

describe('Islamiclesson6Component', () => {
  let component: Islamiclesson6Component;
  let fixture: ComponentFixture<Islamiclesson6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Islamiclesson6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Islamiclesson6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
