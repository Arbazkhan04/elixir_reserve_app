import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryApplicantDetailsComponent } from './primary-applicant-details.component';

describe('PrimaryApplicantDetailsComponent', () => {
  let component: PrimaryApplicantDetailsComponent;
  let fixture: ComponentFixture<PrimaryApplicantDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PrimaryApplicantDetailsComponent]
    });
    fixture = TestBed.createComponent(PrimaryApplicantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
