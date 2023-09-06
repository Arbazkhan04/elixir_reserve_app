import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-verify-bookin-amount',
  standalone: true,
  imports: [CommonModule,CommonButtonsComponent],
  templateUrl: './verify-bookin-amount.component.html',
  styleUrls: ['./verify-bookin-amount.component.css']
})
export class VerifyBookinAmountComponent {


  constructor(private route:Router,private location:Location){}

  navigateToAllAboutYou()
  {
    this.route.navigate(['second-about-you'])
  }

  goToBack()
  {
   this.location.back();
  }
}
