import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondApplicantPanAdharUploadComponent } from './second-applicant-pan-adhar-upload.component';

describe('SecondApplicantPanAdharUploadComponent', () => {
  let component: SecondApplicantPanAdharUploadComponent;
  let fixture: ComponentFixture<SecondApplicantPanAdharUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SecondApplicantPanAdharUploadComponent]
    });
    fixture = TestBed.createComponent(SecondApplicantPanAdharUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
