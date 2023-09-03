import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-condition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css']
})
export class TermsConditionComponent {

  constructor(private route:Router){}

  navigateToDecalarationSubmit()
  {
    this.route.navigate(['decalaration-submit'])
  }
}
