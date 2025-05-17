import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sciencelesson6Component } from './sciencelesson6.component';

describe('Sciencelesson6Component', () => {
  let component: Sciencelesson6Component;
  let fixture: ComponentFixture<Sciencelesson6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sciencelesson6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sciencelesson6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
