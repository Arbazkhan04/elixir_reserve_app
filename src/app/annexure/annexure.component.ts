import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annexure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './annexure.component.html',
  styleUrls: ['./annexure.component.css']
})
export class AnnexureComponent {
  

  constructor(private route:Router)
  {

  }

  navigateToBookingAmount()
  {
    this.route.navigate(['upload-booking-amount'])
  }
  
}
