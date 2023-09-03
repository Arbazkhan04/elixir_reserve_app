import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureComponent } from './annexure.component';

describe('AnnexureComponent', () => {
  let component: AnnexureComponent;
  let fixture: ComponentFixture<AnnexureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnnexureComponent]
    });
    fixture = TestBed.createComponent(AnnexureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
