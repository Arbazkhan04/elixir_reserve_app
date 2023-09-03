import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPrimaryVerifyComponent } from './upload-primary-verify.component';

describe('UploadPrimaryVerifyComponent', () => {
  let component: UploadPrimaryVerifyComponent;
  let fixture: ComponentFixture<UploadPrimaryVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UploadPrimaryVerifyComponent]
    });
    fixture = TestBed.createComponent(UploadPrimaryVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
