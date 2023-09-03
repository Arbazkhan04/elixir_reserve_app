import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-about-you',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.css']
})
export class AboutYouComponent {


  constructor(private route:Router){}

  navigateToTermsCondition()
  {
    this.route.navigate(['terms-condition'])
  }
}
