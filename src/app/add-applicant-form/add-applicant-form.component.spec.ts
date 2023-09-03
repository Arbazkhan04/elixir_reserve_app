import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicantFormComponent } from './add-applicant-form.component';

describe('AddApplicantFormComponent', () => {
  let component: AddApplicantFormComponent;
  let fixture: ComponentFixture<AddApplicantFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddApplicantFormComponent]
    });
    fixture = TestBed.createComponent(AddApplicantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
