import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddApplicantFormComponent } from './add-applicant-form/add-applicant-form.component';
import { UploadSplashScreenComponent } from './upload-splash-screen/upload-splash-screen.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { PriamryApplicantComponent } from './priamry-applicant/priamry-applicant.component';
import { UploadPrimaryVerifyComponent } from './upload-primary-verify/upload-primary-verify.component';
import { ProceedApplicantComponent } from './proceed-applicant/proceed-applicant.component';
import { PrimaryApplicantDetailsComponent } from './primary-applicant-details/primary-applicant-details.component';
import { JointApplicantDetailComponent } from './joint-applicant-detail/joint-applicant-detail.component';
import { AnnexureComponent } from './annexure/annexure.component';
import { UploadBookingAmountComponent } from './upload-booking-amount/upload-booking-amount.component';
import { VerifyBookinAmountComponent } from './verify-bookin-amount/verify-bookin-amount.component';
import { AboutYouComponent } from './about-you/about-you.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { DeclarationSubmitComponent } from './declaration-submit/declaration-submit.component';
import { UnderWorkingUploadImageComponent } from './under-working-upload-image/under-working-upload-image.component';
import { SigningOrderComponent } from './signing-order/signing-order.component';
import { FinishComponent } from './finish/finish.component';
import { ManualSigningComponent } from './manual-signing/manual-signing.component';
import { UploadDocmnetBackComponent } from './upload-docmnet-back/upload-docmnet-back.component';
import { UploadDocmnetFrontComponent } from './upload-docmnet-front/upload-docmnet-front.component';
import { SecondApplicantAmitComponent } from './second-applicant-amit/second-applicant-amit.component';
import { UploadJoined1DetailComponent } from './upload-joined1-detail/upload-joined1-detail.component';
import { UploadImageVerfiy1DocumentComponent } from './upload-image-verfiy1-document/upload-image-verfiy1-document.component';
import { SecondApplicantPanAdharUploadComponent } from './second-applicant-pan-adhar-upload/second-applicant-pan-adhar-upload.component';
import { SecondApplicantUploadVerifyComponent } from './second-applicant-upload-verify/second-applicant-upload-verify.component';
import { DocumentVerifiedSuccesullyComponent } from './document-verified-succesully/document-verified-succesully.component';
import { JoinedApplicant1DetailsComponent } from './joined-applicant1-details/joined-applicant1-details.component';
import { SecondAboutYouComponent } from './second-about-you/second-about-you.component';


export const routes: Routes = [

    {
     path:'', 
     component:HomeComponent
    },

    {
    path:'home', 
    component:HomeComponent
   },

   {
    path:'add-applicant',
    component:AddApplicantFormComponent
  },

  {
   path:'splash-upload',
   component:UploadSplashScreenComponent
  },
  
  // {
  //   path:'upload-image',
  //   component:UploadImageComponent
  // },

  {
    path:'upload-image',
    component:UnderWorkingUploadImageComponent
  },

  {
    path:'upload-joined-1-details',
    component:UploadJoined1DetailComponent
  },

  {
    path:'uplaod-image-verify-1-doc',
    component:UploadImageVerfiy1DocumentComponent
  },

  {
    path:'proceed',
    component:ProceedApplicantComponent
  },

  {
    path:'joined-applicant-1-details',
    component:JoinedApplicant1DetailsComponent
  },
  
  {
    path:'second-applicant-upload-verify',
    component:SecondApplicantUploadVerifyComponent
  },

  {
    path:'applicant-detail',
    component:PrimaryApplicantDetailsComponent
  },

  {
    path:'joined-applicant',
    component:JointApplicantDetailComponent
  },

  {
    path:'annexure',
    component:AnnexureComponent
  },

  {
    path:'upload-booking-amount',
    component:UploadBookingAmountComponent
  },

  {
    path:'document-verifed-successfully',
    component:DocumentVerifiedSuccesullyComponent
  },

  {
    path:'verified-booing-amount',
    component:VerifyBookinAmountComponent
  },
  
  {
    path:'all-about-you',
    component:AboutYouComponent
  },

  {
    path:'second-about-you',
    component:SecondAboutYouComponent
  },

  {
  path:'terms-condition',
  component:TermsConditionComponent
  },

  {
    path:'second-applicant-upload-front',
    component:SecondApplicantAmitComponent
  },

  {
    path:'upload-document-back',
    component:UploadDocmnetBackComponent
  },

  {
    path:'upload-document-front',
    component:UploadDocmnetFrontComponent
  },

  {
    path:'second-applicant-upload-details',
    component:SecondApplicantPanAdharUploadComponent
  },

  {
    path:'decalaration-submit',
    component:DeclarationSubmitComponent
  },

  {
    path:'signing-order',
    component:SigningOrderComponent
  },

  {
    path:'manual-signing',
    component:ManualSigningComponent
  },

  {
    path:'finish',
    component:FinishComponent
  }
    
];
