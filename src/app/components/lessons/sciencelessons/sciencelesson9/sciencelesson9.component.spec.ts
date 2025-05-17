import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sciencelesson9Component } from './sciencelesson9.component';

describe('Sciencelesson9Component', () => {
  let component: Sciencelesson9Component;
  let fixture: ComponentFixture<Sciencelesson9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sciencelesson9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sciencelesson9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
