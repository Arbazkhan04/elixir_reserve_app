import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBookingAmountComponent } from './upload-booking-amount.component';

describe('UploadBookingAmountComponent', () => {
  let component: UploadBookingAmountComponent;
  let fixture: ComponentFixture<UploadBookingAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UploadBookingAmountComponent]
    });
    fixture = TestBed.createComponent(UploadBookingAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
