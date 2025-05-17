import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sciencelesson1Component } from './sciencelesson1.component';

describe('Sciencelesson1Component', () => {
  let component: Sciencelesson1Component;
  let fixture: ComponentFixture<Sciencelesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sciencelesson1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sciencelesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
