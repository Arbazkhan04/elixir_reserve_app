import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedApplicant1DetailsComponent } from './joined-applicant1-details.component';

describe('JoinedApplicant1DetailsComponent', () => {
  let component: JoinedApplicant1DetailsComponent;
  let fixture: ComponentFixture<JoinedApplicant1DetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JoinedApplicant1DetailsComponent]
    });
    fixture = TestBed.createComponent(JoinedApplicant1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
