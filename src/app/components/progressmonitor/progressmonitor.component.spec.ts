import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressmonitorComponent } from './progressmonitor.component';

describe('ProgressmonitorComponent', () => {
  let component: ProgressmonitorComponent;
  let fixture: ComponentFixture<ProgressmonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressmonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressmonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
