import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import {UploadImageComponent} from './upload-image/upload-image.component';
import {CheckoutComponent} from './checkout/checkout.component';


const routes: Routes = [

	{path:'login',component: LoginComponent},
	{path:'register',component:RegisterComponent},
	{path:'home/:userName',component:HomeComponent},
	{path:'upload-image',component:UploadImageComponent},
	{path:'checkout/:userName', component:CheckoutComponent},
	{path:"",redirectTo: "/login",pathMatch:"full"},
	{path:"**",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
