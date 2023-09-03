import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-upload-primary-verify',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-primary-verify.component.html',
  styleUrls: ['./upload-primary-verify.component.css']
})
export class UploadPrimaryVerifyComponent {
 
  constructor(private route:Router,private location:Location ){}

  navigateToNext()
  {
    this.route.navigate(['proceed'])
  }
  
  goToBack()
  {
    this.location.back();
  }
}
