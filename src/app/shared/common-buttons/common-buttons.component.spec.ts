import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonButtonsComponent } from './common-buttons.component';

describe('CommonButtonsComponent', () => {
  let component: CommonButtonsComponent;
  let fixture: ComponentFixture<CommonButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonButtonsComponent]
    });
    fixture = TestBed.createComponent(CommonButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
