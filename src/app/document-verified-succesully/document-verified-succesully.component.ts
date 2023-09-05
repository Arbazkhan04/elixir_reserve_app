import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-document-verified-succesully',
  standalone: true,
  imports: [CommonModule,CommonButtonsComponent],
  templateUrl: './document-verified-succesully.component.html',
  styleUrls: ['./document-verified-succesully.component.css']
})
export class DocumentVerifiedSuccesullyComponent {

  constructor(private route:Router,private locaion:Location)  {}

  goToVerify()
  {
    this.route.navigate(['applicant-detail'])
  }

  goToBack()
  {
    this.locaion.back();
  }
}
