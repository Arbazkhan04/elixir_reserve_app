import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanAdharCommonComponent } from './pan-adhar-common.component';

describe('PanAdharCommonComponent', () => {
  let component: PanAdharCommonComponent;
  let fixture: ComponentFixture<PanAdharCommonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PanAdharCommonComponent]
    });
    fixture = TestBed.createComponent(PanAdharCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
