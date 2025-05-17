import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sciencelesson7Component } from './sciencelesson7.component';

describe('Sciencelesson7Component', () => {
  let component: Sciencelesson7Component;
  let fixture: ComponentFixture<Sciencelesson7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sciencelesson7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sciencelesson7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
