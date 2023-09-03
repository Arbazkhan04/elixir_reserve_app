import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriamryApplicantComponent } from './priamry-applicant.component';

describe('PriamryApplicantComponent', () => {
  let component: PriamryApplicantComponent;
  let fixture: ComponentFixture<PriamryApplicantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PriamryApplicantComponent]
    });
    fixture = TestBed.createComponent(PriamryApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
