import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-joined-applicant1-details',
  standalone: true,
  imports: [CommonModule,CommonButtonsComponent],
  templateUrl: './joined-applicant1-details.component.html',
  styleUrls: ['./joined-applicant1-details.component.css']
})
export class JoinedApplicant1DetailsComponent {

  constructor(private route:Router,private locaion:Location)  {}

  goToVerify()
  {
    this.route.navigate(['all-about-you'])
  }

  goToBack()
  {
    this.locaion.back();
  }

}
