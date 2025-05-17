import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arabiclesson6Component } from './arabiclesson6.component';

describe('Arabiclesson6Component', () => {
  let component: Arabiclesson6Component;
  let fixture: ComponentFixture<Arabiclesson6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arabiclesson6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arabiclesson6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
