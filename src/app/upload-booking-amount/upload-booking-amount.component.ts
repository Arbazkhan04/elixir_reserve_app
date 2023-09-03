import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-booking-amount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-booking-amount.component.html',
  styleUrls: ['./upload-booking-amount.component.css']
})
export class UploadBookingAmountComponent {
 
  constructor(private route:Router)
  {

  }

  navigateToVerfiyBooking()
  {
   this.route.navigate(['verified-booing-amount'])
  }
}
