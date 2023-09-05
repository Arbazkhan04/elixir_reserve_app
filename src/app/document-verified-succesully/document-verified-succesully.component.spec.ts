import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentVerifiedSuccesullyComponent } from './document-verified-succesully.component';

describe('DocumentVerifiedSuccesullyComponent', () => {
  let component: DocumentVerifiedSuccesullyComponent;
  let fixture: ComponentFixture<DocumentVerifiedSuccesullyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DocumentVerifiedSuccesullyComponent]
    });
    fixture = TestBed.createComponent(DocumentVerifiedSuccesullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
