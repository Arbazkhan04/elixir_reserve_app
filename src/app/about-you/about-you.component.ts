import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-about-you',
  standalone: true,
  imports: [CommonModule,CommonButtonsComponent],
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.css']
})
export class AboutYouComponent {


  constructor(private route:Router,private location:Location){}

  navigateToTermsCondition()
  {
    this.route.navigate(['annexure'])
  }

  goToBack()
  {
    this.location.back();

   }
}
