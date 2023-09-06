import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-annexure',
  standalone: true,
  imports: [CommonModule,CommonButtonsComponent],
  templateUrl: './annexure.component.html',
  styleUrls: ['./annexure.component.css']
})
export class AnnexureComponent {
  

  constructor(private route:Router,private location:Location)
  {

  }

  navigateToBookingAmount()
  {
    this.route.navigate(['upload-booking-amount'])
  }

  goToBack()
  {
    this.location.back();
  }

  
}
