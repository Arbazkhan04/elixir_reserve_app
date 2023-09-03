import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSplashScreenComponent } from './upload-splash-screen.component';

describe('UploadSplashScreenComponent', () => {
  let component: UploadSplashScreenComponent;
  let fixture: ComponentFixture<UploadSplashScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UploadSplashScreenComponent]
    });
    fixture = TestBed.createComponent(UploadSplashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
