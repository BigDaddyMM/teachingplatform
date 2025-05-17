import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arabiclesson4Component } from './arabiclesson4.component';

describe('Arabiclesson4Component', () => {
  let component: Arabiclesson4Component;
  let fixture: ComponentFixture<Arabiclesson4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arabiclesson4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arabiclesson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
