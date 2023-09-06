import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-upload-booking-amount',
  standalone: true,
  imports: [CommonModule,CommonButtonsComponent],
  templateUrl: './upload-booking-amount.component.html',
  styleUrls: ['./upload-booking-amount.component.css']
})
export class UploadBookingAmountComponent {
 
  constructor(private route:Router,private location:Location)
  {

  }

  navigateToVerfiyBooking()
  {
   this.route.navigate(['verified-booing-amount'])
  }

  goToBack()
  {
    this.location.back();
  }
}
