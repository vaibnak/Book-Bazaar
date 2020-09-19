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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ManageUsersService,GetFiltersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
