import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointApplicantDetailComponent } from './joint-applicant-detail.component';

describe('JointApplicantDetailComponent', () => {
  let component: JointApplicantDetailComponent;
  let fixture: ComponentFixture<JointApplicantDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JointApplicantDetailComponent]
    });
    fixture = TestBed.createComponent(JointApplicantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
