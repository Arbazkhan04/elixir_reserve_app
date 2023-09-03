import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceed-applicant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proceed-applicant.component.html',
  styleUrls: ['./proceed-applicant.component.css']
})
export class ProceedApplicantComponent {


  constructor(private route:Router,private locaion:Location)  {}

  goToVerify()
  {
    this.route.navigate(['applicant-detail'])
  }

  goToBack()
  {
    this.locaion.back();
  }
}
