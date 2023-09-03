import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joint-applicant-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joint-applicant-detail.component.html',
  styleUrls: ['./joint-applicant-detail.component.css']
})
export class JointApplicantDetailComponent {


  constructor(private route : Router){}

  navigateToAnnexure()
  {
    this.route.navigate(['annexure'])
  }
}
