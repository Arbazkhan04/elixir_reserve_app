import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-under-working-upload-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './under-working-upload-image.component.html',
  styleUrls: ['./under-working-upload-image.component.css']
})
export class UnderWorkingUploadImageComponent {

constructor(private route:Router){}

  navigateToNext() {
    this.route.navigate(['primary-applicant']);
  }
}
