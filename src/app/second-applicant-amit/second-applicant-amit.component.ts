import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFaceCommonComponent } from '../shared/upload-face-common/upload-face-common.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-applicant-amit',
  standalone: true,
  imports: [CommonModule,UploadFaceCommonComponent],
  templateUrl: './second-applicant-amit.component.html',
  styleUrls: ['./second-applicant-amit.component.css']
})
export class SecondApplicantAmitComponent {

  constructor(private route:Router){}

  goToNext()
  {
   this.route.navigate(['second-applicant-upload-details'])
  }
}
