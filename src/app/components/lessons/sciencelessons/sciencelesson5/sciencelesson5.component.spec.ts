import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sciencelesson5Component } from './sciencelesson5.component';

describe('Sciencelesson5Component', () => {
  let component: Sciencelesson5Component;
  let fixture: ComponentFixture<Sciencelesson5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sciencelesson5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sciencelesson5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
