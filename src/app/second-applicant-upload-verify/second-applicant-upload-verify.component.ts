import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { VerifyUploadDocumentCommonComponent } from '../shared/verify-upload-document-common/verify-upload-document-common.component';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-second-applicant-upload-verify',
  standalone: true,
  imports: [CommonModule,VerifyUploadDocumentCommonComponent,CommonButtonsComponent],
  templateUrl: './second-applicant-upload-verify.component.html',
  styleUrls: ['./second-applicant-upload-verify.component.css']
})
export class SecondApplicantUploadVerifyComponent {

  constructor(private route:Router,private location:Location ){}

  navigateToNext()
  {
    this.route.navigate(['document-verifed-successfully'])
  }
  
  goToBack()
  {
    this.location.back();
  }
  
}
