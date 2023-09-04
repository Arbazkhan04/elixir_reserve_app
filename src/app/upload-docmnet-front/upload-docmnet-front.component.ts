import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-docmnet-front',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-docmnet-front.component.html',
  styleUrls: ['./upload-docmnet-front.component.css']
})
export class UploadDocmnetFrontComponent {


  constructor(private route:Router){}


  navigteToUploadBack()
  {
     this.route.navigate(['upload-document-back'])
  }
}
