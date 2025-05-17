import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sciencelesson2Component } from './sciencelesson2.component';

describe('Sciencelesson2Component', () => {
  let component: Sciencelesson2Component;
  let fixture: ComponentFixture<Sciencelesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sciencelesson2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sciencelesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
