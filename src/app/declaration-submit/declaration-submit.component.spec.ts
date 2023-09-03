import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationSubmitComponent } from './declaration-submit.component';

describe('DeclarationSubmitComponent', () => {
  let component: DeclarationSubmitComponent;
  let fixture: ComponentFixture<DeclarationSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeclarationSubmitComponent]
    });
    fixture = TestBed.createComponent(DeclarationSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
