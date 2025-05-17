import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathlesson4Component } from './mathlesson4.component';

describe('Mathlesson4Component', () => {
  let component: Mathlesson4Component;
  let fixture: ComponentFixture<Mathlesson4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathlesson4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathlesson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
