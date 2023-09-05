import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UploadFaceCommonComponent } from '../shared/upload-face-common/upload-face-common.component';

@Component({
  selector: 'app-under-working-upload-image',
  standalone: true,
  imports: [CommonModule,UploadFaceCommonComponent],
  templateUrl: './under-working-upload-image.component.html',
  styleUrls: ['./under-working-upload-image.component.css']
})
export class UnderWorkingUploadImageComponent {

constructor(private route:Router){}

  navigateToNext() {
    this.route.navigate(['upload-joined-1-details']);
  }
}
