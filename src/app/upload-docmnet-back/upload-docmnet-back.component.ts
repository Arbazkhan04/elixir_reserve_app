import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-docmnet-back',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-docmnet-back.component.html',
  styleUrls: ['./upload-docmnet-back.component.css']
})
export class UploadDocmnetBackComponent {

  constructor(private route:Router){}

  goToNext()
  {
    this.route.navigate([''])
  }
}
