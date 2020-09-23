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

   removeUserBook(obj){
    let myServerUrl = this.myBaseServerUrl+"api/removeUserBook";
    return this.httpClient.post(myServerUrl,obj); 
   }

   updateQuantity(obj){
    let myServerUrl = this.myBaseServerUrl+"api/updateQuantity";
    return this.httpClient.post(myServerUrl,obj);  
   }

   orderBook(obj){
    let myServerUrl = this.myBaseServerUrl+"api/orderBook";
    return this.httpClient.post(myServerUrl,obj); 
   }

   getOrder(obj){
     let myServerUrl = this.myBaseServerUrl+"api/getOrder";
    return this.httpClient.post(myServerUrl,obj);
   }

   getUser(obj){
     let myServerUrl = this.myBaseServerUrl+"api/getUser";
      return this.httpClient.post(myServerUrl,obj);
   }


}
