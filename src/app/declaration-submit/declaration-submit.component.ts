import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-declaration-submit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './declaration-submit.component.html',
  styleUrls: ['./declaration-submit.component.css']
})
export class DeclarationSubmitComponent {

  constructor(private router:Router){}

  naviageTosigningorder()
  {
     this.router.navigate(['signing-order'])
  }

  navigateToManualSigning()

  {
    this.router.navigate(['manual-signing']);
  }
}
