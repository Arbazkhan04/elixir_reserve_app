import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningOrderComponent } from './signing-order.component';

describe('SigningOrderComponent', () => {
  let component: SigningOrderComponent;
  let fixture: ComponentFixture<SigningOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SigningOrderComponent]
    });
    fixture = TestBed.createComponent(SigningOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
