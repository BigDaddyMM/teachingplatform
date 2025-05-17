import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sciencelesson10Component } from './sciencelesson10.component';

describe('Sciencelesson10Component', () => {
  let component: Sciencelesson10Component;
  let fixture: ComponentFixture<Sciencelesson10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sciencelesson10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sciencelesson10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
