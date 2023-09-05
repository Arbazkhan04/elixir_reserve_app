import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFaceCommonComponent } from './upload-face-common.component';

describe('UploadFaceCommonComponent', () => {
  let component: UploadFaceCommonComponent;
  let fixture: ComponentFixture<UploadFaceCommonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UploadFaceCommonComponent]
    });
    fixture = TestBed.createComponent(UploadFaceCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
