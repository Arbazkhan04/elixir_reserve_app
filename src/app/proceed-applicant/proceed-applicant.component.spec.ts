import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedApplicantComponent } from './proceed-applicant.component';

describe('ProceedApplicantComponent', () => {
  let component: ProceedApplicantComponent;
  let fixture: ComponentFixture<ProceedApplicantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProceedApplicantComponent]
    });
    fixture = TestBed.createComponent(ProceedApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
