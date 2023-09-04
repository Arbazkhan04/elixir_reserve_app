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
    path:'primary-applicant',
    component:PriamryApplicantComponent
  },

  {
    path:'uplaod-image-verify',
    component:UploadPrimaryVerifyComponent
  },

  {
    path:'proceed',
    component:ProceedApplicantComponent
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
    path:'verified-booing-amount',
    component:VerifyBookinAmountComponent
  },
  
  {
    path:'all-about-you',
    component:AboutYouComponent
  },

  {
  path:'terms-condition',
  component:TermsConditionComponent
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
