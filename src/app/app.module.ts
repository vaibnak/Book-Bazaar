import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ManageUsersService } from './manage-users.service';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { GetFiltersService } from './get-filters.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrderComponent } from './order/order.component';
import {EncrServiceService} from './encr-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UploadImageComponent,
    CheckoutComponent,
    AboutUsComponent,
    ContactUsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ManageUsersService,GetFiltersService,EncrServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
