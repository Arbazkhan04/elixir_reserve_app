import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { VerifyUploadDocumentCommonComponent } from '../shared/verify-upload-document-common/verify-upload-document-common.component';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-image-verfiy1-document',
  standalone: true,
  imports: [CommonModule,VerifyUploadDocumentCommonComponent,CommonButtonsComponent],
  templateUrl: './upload-image-verfiy1-document.component.html',
  styleUrls: ['./upload-image-verfiy1-document.component.css']
})
export class UploadImageVerfiy1DocumentComponent {

  constructor(private route:Router,private location:Location ){}

  navigateToNext()
  {
    this.route.navigate(['proceed'])
  }
  
  goToBack()
  {
    this.location.back();
  }
  
}
