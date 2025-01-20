import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadwriteComponent } from './readwrite.component';

describe('ReadwriteComponent', () => {
  let component: ReadwriteComponent;
  let fixture: ComponentFixture<ReadwriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadwriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadwriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
