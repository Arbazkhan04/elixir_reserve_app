import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocmnetBackComponent } from './upload-docmnet-back.component';

describe('UploadDocmnetBackComponent', () => {
  let component: UploadDocmnetBackComponent;
  let fixture: ComponentFixture<UploadDocmnetBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UploadDocmnetBackComponent]
    });
    fixture = TestBed.createComponent(UploadDocmnetBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
