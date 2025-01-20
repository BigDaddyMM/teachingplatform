import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupselectComponent } from './signupselect.component';

describe('SignupselectComponent', () => {
  let component: SignupselectComponent;
  let fixture: ComponentFixture<SignupselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
