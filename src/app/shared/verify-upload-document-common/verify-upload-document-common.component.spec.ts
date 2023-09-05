import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyUploadDocumentCommonComponent } from './verify-upload-document-common.component';

describe('VerifyUploadDocumentCommonComponent', () => {
  let component: VerifyUploadDocumentCommonComponent;
  let fixture: ComponentFixture<VerifyUploadDocumentCommonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VerifyUploadDocumentCommonComponent]
    });
    fixture = TestBed.createComponent(VerifyUploadDocumentCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
