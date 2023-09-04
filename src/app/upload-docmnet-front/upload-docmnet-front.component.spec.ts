import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocmnetFrontComponent } from './upload-docmnet-front.component';

describe('UploadDocmnetFrontComponent', () => {
  let component: UploadDocmnetFrontComponent;
  let fixture: ComponentFixture<UploadDocmnetFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UploadDocmnetFrontComponent]
    });
    fixture = TestBed.createComponent(UploadDocmnetFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
