import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sciencelesson4Component } from './sciencelesson4.component';

describe('Sciencelesson4Component', () => {
  let component: Sciencelesson4Component;
  let fixture: ComponentFixture<Sciencelesson4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sciencelesson4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sciencelesson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
