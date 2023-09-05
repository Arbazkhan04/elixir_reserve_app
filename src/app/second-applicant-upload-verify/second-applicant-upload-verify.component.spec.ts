import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondApplicantUploadVerifyComponent } from './second-applicant-upload-verify.component';

describe('SecondApplicantUploadVerifyComponent', () => {
  let component: SecondApplicantUploadVerifyComponent;
  let fixture: ComponentFixture<SecondApplicantUploadVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SecondApplicantUploadVerifyComponent]
    });
    fixture = TestBed.createComponent(SecondApplicantUploadVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
