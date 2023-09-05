import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-about-you',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-about-you.component.html',
  styleUrls: ['./second-about-you.component.css']
})
export class SecondAboutYouComponent {


  constructor(private route:Router){}

  navigateToTermsCondition()
  {
    this.route.navigate(['terms-condition'])
  }
  
}
