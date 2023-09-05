import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageVerfiy1DocumentComponent } from './upload-image-verfiy1-document.component';

describe('UploadImageVerfiy1DocumentComponent', () => {
  let component: UploadImageVerfiy1DocumentComponent;
  let fixture: ComponentFixture<UploadImageVerfiy1DocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UploadImageVerfiy1DocumentComponent]
    });
    fixture = TestBed.createComponent(UploadImageVerfiy1DocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
