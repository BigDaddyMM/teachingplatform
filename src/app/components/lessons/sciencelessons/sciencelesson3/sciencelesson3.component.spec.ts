import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sciencelesson3Component } from './sciencelesson3.component';

describe('Sciencelesson3Component', () => {
  let component: Sciencelesson3Component;
  let fixture: ComponentFixture<Sciencelesson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sciencelesson3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sciencelesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
