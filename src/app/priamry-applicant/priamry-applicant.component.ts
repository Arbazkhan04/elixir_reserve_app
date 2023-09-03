import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-priamry-applicant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './priamry-applicant.component.html',
  styleUrls: ['./priamry-applicant.component.css']
})
export class PriamryApplicantComponent {

  constructor(private route:Router){}

  goToVerify()
  {
   this.route.navigate(['uplaod-image-verify'])
  }
}
