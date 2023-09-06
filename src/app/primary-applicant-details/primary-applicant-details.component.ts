import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-primary-applicant-details',
  standalone: true,
  imports: [CommonModule,CommonButtonsComponent],
  templateUrl: './primary-applicant-details.component.html',
  styleUrls: ['./primary-applicant-details.component.css']
})
export class PrimaryApplicantDetailsComponent {


  constructor(private route : Router,private location:Location){}

  navigareToJoinedApplicant()
  {
    this.route.navigate(['joined-applicant-1-details'])
  }

  goToBack()
  {
    this.location.back();
  }
}