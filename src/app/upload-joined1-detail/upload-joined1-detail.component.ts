import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { PanAdharCommonComponent } from '../shared/pan-adhar-common/pan-adhar-common.component';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-joined1-detail',
  standalone: true,
  imports: [CommonModule,PanAdharCommonComponent,CommonButtonsComponent],
  templateUrl: './upload-joined1-detail.component.html',
  styleUrls: ['./upload-joined1-detail.component.css']
})
export class UploadJoined1DetailComponent {


  constructor(private route:Router,private location:Location){}

  goToNext()
  {
   this.route.navigate(['uplaod-image-verify-1-doc'])
  }

  goToBack(){
    this.location.back()
  }
}
