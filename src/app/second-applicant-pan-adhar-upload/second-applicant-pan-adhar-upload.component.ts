import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { PanAdharCommonComponent } from '../shared/pan-adhar-common/pan-adhar-common.component';
import { CommonButtonsComponent } from '../shared/common-buttons/common-buttons.component';

@Component({
  selector: 'app-second-applicant-pan-adhar-upload',
  standalone: true,
  imports: [CommonModule,PanAdharCommonComponent,CommonButtonsComponent],
  templateUrl: './second-applicant-pan-adhar-upload.component.html',
  styleUrls: ['./second-applicant-pan-adhar-upload.component.css']
})
export class SecondApplicantPanAdharUploadComponent {


  constructor(private route:Router,private location:Location){}
  goToNext()
  {
   this.route.navigate(['second-applicant-upload-verify'])
  }

  goToBack(){
    this.location.back()
  }
}
