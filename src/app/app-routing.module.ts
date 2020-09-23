import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import {UploadImageComponent} from './upload-image/upload-image.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [

	{path:'login',component: LoginComponent},
	{path:'register',component:RegisterComponent},
	{path:'home/:userName',component:HomeComponent},
	{path:'admin/:userName',component:UploadImageComponent},
	{path:'checkout/:userName', component:CheckoutComponent},
	{path:'aboutus/:userName',component:AboutUsComponent},
	{path:'contactus/:userName',component:ContactUsComponent},
	{path:'order/:userName',component:OrderComponent},
	{path:"",redirectTo: "/login",pathMatch:"full"},
	{path:"**",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
