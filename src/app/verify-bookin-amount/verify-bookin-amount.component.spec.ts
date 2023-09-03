import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyBookinAmountComponent } from './verify-bookin-amount.component';

describe('VerifyBookinAmountComponent', () => {
  let component: VerifyBookinAmountComponent;
  let fixture: ComponentFixture<VerifyBookinAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VerifyBookinAmountComponent]
    });
    fixture = TestBed.createComponent(VerifyBookinAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
