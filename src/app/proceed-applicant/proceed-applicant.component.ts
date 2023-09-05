import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-proceed-applicant',
  standalone: true,
  imports: [CommonModule,CommonButtonsComponent],
  templateUrl: './proceed-applicant.component.html',
  styleUrls: ['./proceed-applicant.component.css']
})
export class ProceedApplicantComponent {


  constructor(private route:Router,private locaion:Location)  {}

  goToVerify()
  {
    this.route.navigate(['second-applicant-upload-front'])
  }

  goToBack()
  {
    this.locaion.back();
  }
}
