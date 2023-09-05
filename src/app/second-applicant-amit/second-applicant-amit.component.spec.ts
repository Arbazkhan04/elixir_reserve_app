import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondApplicantAmitComponent } from './second-applicant-amit.component';

describe('SecondApplicantAmitComponent', () => {
  let component: SecondApplicantAmitComponent;
  let fixture: ComponentFixture<SecondApplicantAmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SecondApplicantAmitComponent]
    });
    fixture = TestBed.createComponent(SecondApplicantAmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
