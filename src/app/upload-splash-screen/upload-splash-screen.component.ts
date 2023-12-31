import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-upload-splash-screen',
  standalone: true,
  imports: [CommonModule,RouterModule,CommonButtonsComponent],
  templateUrl: './upload-splash-screen.component.html',
  styleUrls: ['./upload-splash-screen.component.css']
})
export class UploadSplashScreenComponent {
  
  constructor(private route : Router,private location:Location){}

  navigateToImageUpload()
  {
    this.route.navigate(['upload-image'])
  }

  goToBack()
  {
    this.location.back();
  }
}
