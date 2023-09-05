import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAboutYouComponent } from './second-about-you.component';

describe('SecondAboutYouComponent', () => {
  let component: SecondAboutYouComponent;
  let fixture: ComponentFixture<SecondAboutYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SecondAboutYouComponent]
    });
    fixture = TestBed.createComponent(SecondAboutYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
