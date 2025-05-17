import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sciencelesson8Component } from './sciencelesson8.component';

describe('Sciencelesson8Component', () => {
  let component: Sciencelesson8Component;
  let fixture: ComponentFixture<Sciencelesson8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sciencelesson8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sciencelesson8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
