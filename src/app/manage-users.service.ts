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

}
