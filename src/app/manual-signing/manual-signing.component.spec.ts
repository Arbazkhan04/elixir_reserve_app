import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSigningComponent } from './manual-signing.component';

describe('ManualSigningComponent', () => {
  let component: ManualSigningComponent;
  let fixture: ComponentFixture<ManualSigningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManualSigningComponent]
    });
    fixture = TestBed.createComponent(ManualSigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
