import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frenchlesson4Component } from './frenchlesson4.component';

describe('Frenchlesson4Component', () => {
  let component: Frenchlesson4Component;
  let fixture: ComponentFixture<Frenchlesson4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frenchlesson4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frenchlesson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
