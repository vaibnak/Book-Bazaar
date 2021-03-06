import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ManageUsersService} from '../manage-users.service';
import {Router} from "@angular/router"
import {EncrServiceService} from '../encr-service.service';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
		userName: new FormControl('',[Validators.required]),
		password: new FormControl('',[Validators.required]),
	});
  wrongInfo:boolean;
  
  constructor(private encrService:EncrServiceService, private manageUsersService:ManageUsersService,public router:Router) { }

  ngOnInit(): void {
    this.wrongInfo = false;
  }

  onSubmit(){
  	console.log("form submit function called");
  	console.log(this.loginForm.get('password').value)
  	console.log(this.loginForm.get('userName').value)

    let pass = this.encrService.set(environment.key,this.loginForm.get('password').value)

 	
 	this.manageUsersService.loginUser({userName:this.loginForm.get('userName').value, password: pass})
 	.subscribe((data)=>{
 		console.log(data);
 		var tempObj:any=data["message"];
      	if(tempObj == true){
        	this.router.navigate(["/home",this.loginForm.get('userName').value]);
      	  this.wrongInfo = false;
        }else{
          this.wrongInfo = true;
        }
 	},(err)=>{
 		console.log(err);
 	})
  }

  homeEventHandler(){
    this.router.navigate(["/home","undefined"]);
  }

  checkoutEventHandler(){
     this.router.navigate(["/checkout","undefined"]); 
  }

  orderEventHandler(){
    this.router.navigate(["/order","undefined"]);
  }

  aboutusEventHandler(){
    this.router.navigate(["/aboutus","undefined"]);
  }

  contactusEventHandler(){
    this.router.navigate(["/contactus","undefined"]);
  }


}
