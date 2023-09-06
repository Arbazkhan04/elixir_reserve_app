import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';


@Component({
  selector: 'app-terms-condition',
  standalone: true,
  imports: [CommonModule,CommonButtonsComponent],
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css']
})
export class TermsConditionComponent {

  constructor(private route:Router,private location:Location){}

  navigateToDecalarationSubmit()
  {
    this.route.navigate(['decalaration-submit'])
  }

  goToBack()
  {
   this.location.back();
  }
}
