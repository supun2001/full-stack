import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { LoginComponent } from './comp/login/login.component';
import { PhoneComponent } from './comp/phone/phone.component';
import { PaymentComponent } from './comp/payment/payment.component';
import { SignupComponent } from './comp/signup/signup.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },{
    path:'login',component:LoginComponent
  },{
    path:'phone/:id',component:PhoneComponent
  },{
    path:'payment',component:PaymentComponent
  },
  {
    path:'signup',component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
