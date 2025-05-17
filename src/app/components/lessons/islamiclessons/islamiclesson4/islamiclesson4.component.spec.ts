import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Islamiclesson4Component } from './islamiclesson4.component';

describe('Islamiclesson4Component', () => {
  let component: Islamiclesson4Component;
  let fixture: ComponentFixture<Islamiclesson4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Islamiclesson4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Islamiclesson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
