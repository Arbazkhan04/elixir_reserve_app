import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-face-common',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-face-common.component.html',
  styleUrls: ['./upload-face-common.component.css']
})
export class UploadFaceCommonComponent {

  @Output() continueClick = new EventEmitter<void>();
  
  navigateToNext()
  {
    this.continueClick.emit();
  }

}
