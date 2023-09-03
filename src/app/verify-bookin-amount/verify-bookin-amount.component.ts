import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-bookin-amount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verify-bookin-amount.component.html',
  styleUrls: ['./verify-bookin-amount.component.css']
})
export class VerifyBookinAmountComponent {


  constructor(private route:Router){}

  navigateToAllAboutYou()
  {
    this.route.navigate(['all-about-you'])
  }
}
