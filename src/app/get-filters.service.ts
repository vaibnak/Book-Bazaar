import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GetFiltersService {
  myBaseServerUrl = environment.serverUrl;
 
  constructor(public httpClient:HttpClient) {
  

   }

   getFilterByAuthors(){
   	let myServerUrl = this.myBaseServerUrl+"api/filterByAuthor";
   	return this.httpClient.get(myServerUrl);
   }

   getFilterByGenere(){
   	let myServerUrl = this.myBaseServerUrl+"api/filterByGenere";
   	return this.httpClient.get(myServerUrl);
   }




}
