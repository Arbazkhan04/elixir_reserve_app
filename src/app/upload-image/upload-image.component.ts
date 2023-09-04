import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2ImgMaxModule, Ng2ImgMaxService } from 'ng2-img-max';
import { WebcamImage, WebcamModule } from 'ngx-webcam';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [CommonModule,WebcamModule,Ng2ImgMaxModule],
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  showCamera = true;
  webcamHeight = 300;
  webcamWidth = 400;

  // Create a Subject for trigger
  private trigger: Subject<void> = new Subject<void>();

  public capturedImage: WebcamImage | null = null;

  constructor(
    private route: Router,
    private ng2ImgMax: Ng2ImgMaxService
  ) {}

  // compressAndUpload() {
  //   if (this.capturedImage) {
  //     console.log(this.captureImage)
  //     // Extract the image type from the data URL
  //     const imageType = this.capturedImage.imageAsDataUrl.split(':')[1].split(';')[0];
       
  //     console.log(imageType)
  
  //     // Check if the image type is valid (jpg or png)
  //     if (imageType === 'image/jpeg' || imageType === 'image/png') {


  //       // Convert the WebcamImage to a File object with the correct format
  //       const base64Data = this.capturedImage.imageAsDataUrl;
  //       const blob = this.dataURLtoBlob(base64Data, imageType);
  //       const file = new File([blob], 'captured_image.jpg', { type: imageType });
  
  //       this.ng2ImgMax.compress([file], 0.2).subscribe(
  //         result => {
  //           // 'result' is an array of compressed images (base64 data)
  //           // Implement the code to upload 'result' to your backend here
  //           // For demonstration purposes, we'll log the data
  //           console.log('Compressed Image:', result[0]);
  //         },
  //         error => {
  //           console.error('Error compressing image:', error);
  //         }
  //       );
  //     } else {
  //       console.error('Invalid image type. Please capture an image of type jpg or png.');
  //     }
  //   } else {
  //     console.error('No captured image to compress.');
  //   }
  // }

  handleImageCapture(webcamImage: WebcamImage) {
    console.log("webcan iamgee base 64 "+ webcamImage.imageAsBase64)
    console.log("webcan iamgee image as data url"+ webcamImage.imageAsDataUrl)
    this.capturedImage = webcamImage;
    console.log('Captured Image:', this.capturedImage); // Add this line
    this.showCamera = false;
  }

  captureImage() {
    this.trigger.next(); // Emit a value to trigger image capture
  }

  navigateToNext() {
    this.route.navigate(['primary-applicant']);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  // Helper function to convert data URL to Blob
  // Helper function to convert data URL to Blob with specified type


// private dataURLtoBlob(dataURL: string, type: string): Blob {
//   const parts = dataURL.split(';base64,');
//   const contentType = type;
//   const byteCharacters = atob(parts[1]);
//   const byteNumbers = new Array(byteCharacters.length);

//   for (let i = 0; i < byteCharacters.length; i++) {
//     byteNumbers[i] = byteCharacters.charCodeAt(i);
//   }

//   return new Blob([new Uint8Array(byteNumbers)], { type: contentType });
// }


}
