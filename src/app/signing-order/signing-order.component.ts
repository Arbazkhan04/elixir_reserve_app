import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signing-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signing-order.component.html',
  styleUrls: ['./signing-order.component.css']
})
export class SigningOrderComponent {
  
  constructor(private route : Router){}

  navigateToFinsh()
  {
    this.route.navigate(['finish'])
  }
}
