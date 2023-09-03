import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-applicant-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-applicant-form.component.html',
  styleUrls: ['./add-applicant-form.component.css']
})
export class AddApplicantFormComponent {

  constructor(private route:Router){}

  navigateToSplashUpload()
  {
    this.route.navigate(['splash-upload'])
  }
}
