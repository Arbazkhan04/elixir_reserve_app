import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-second-about-you',
  standalone: true,
  imports: [CommonModule,CommonButtonsComponent],
  templateUrl: './second-about-you.component.html',
  styleUrls: ['./second-about-you.component.css']
})
export class SecondAboutYouComponent {


  constructor(private route:Router,private location:Location){}

  navigateToTermsCondition()
  {
    this.route.navigate(['terms-condition'])
  }
  
  goToBack()
  {
    this.location.back();
  }
}
