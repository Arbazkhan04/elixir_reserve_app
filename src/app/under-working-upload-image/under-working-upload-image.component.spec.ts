import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderWorkingUploadImageComponent } from './under-working-upload-image.component';

describe('UnderWorkingUploadImageComponent', () => {
  let component: UnderWorkingUploadImageComponent;
  let fixture: ComponentFixture<UnderWorkingUploadImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UnderWorkingUploadImageComponent]
    });
    fixture = TestBed.createComponent(UnderWorkingUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
