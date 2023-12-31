import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-priamry-applicant',
  standalone: true,
  imports: [CommonModule,CommonButtonsComponent],
  templateUrl: './priamry-applicant.component.html',
  styleUrls: ['./priamry-applicant.component.css']
})
export class PriamryApplicantComponent {

  constructor(private route:Router,private location:Location){}

  goToVerify()
  {
   this.route.navigate(['uplaod-image-verify'])
  }

  goToBack()
  {
    this.location.back();
  }
}
