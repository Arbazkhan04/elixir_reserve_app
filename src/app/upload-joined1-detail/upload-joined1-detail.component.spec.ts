import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadJoined1DetailComponent } from './upload-joined1-detail.component';

describe('UploadJoined1DetailComponent', () => {
  let component: UploadJoined1DetailComponent;
  let fixture: ComponentFixture<UploadJoined1DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UploadJoined1DetailComponent]
    });
    fixture = TestBed.createComponent(UploadJoined1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
