import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  myBaseServerUrl = environment.serverUrl;

  constructor(public httpClient:HttpClient) { }

  registerUser(obj){
  	var myServerUrl = this.myBaseServerUrl+"api/register";
  	return this.httpClient.post(myServerUrl,obj);
  }

  loginUser(obj){
  	var myServerUrl = this.myBaseServerUrl+"api/login";
  	return this.httpClient.post(myServerUrl,obj);
  }

  uploadBook(obj){
    var myServerUrl = this.myBaseServerUrl+"api/upload";
    return this.httpClient.post(myServerUrl,obj);
  }

  getBook(){
    var myServerUrl = this.myBaseServerUrl+"api/getBook";
    return this.httpClient.get(myServerUrl)
  }

  storeUserBook(obj){
    let myServerUrl = this.myBaseServerUrl+"api/storeUserBook";
    return this.httpClient.post(myServerUrl,obj);
   }

   getUserBook(obj){
    let myServerUrl = this.myBaseServerUrl+"api/getUserBook";
    return this.httpClient.post(myServerUrl,obj); 
   }

   getBookFromBooks(obj){
     let myServerUrl = this.myBaseServerUrl+"api/getBookFromBooks";
    return this.httpClient.post(myServerUrl,obj);
   }



}
